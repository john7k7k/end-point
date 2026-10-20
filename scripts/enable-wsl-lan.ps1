# Run from an elevated Windows PowerShell after starting WSL services.
# Keeps the WSL backend on loopback and forwards the Windows Wi-Fi address.
# Run again if the Wi-Fi IPv4 address changes.
#Requires -RunAsAdministrator
$ErrorActionPreference = 'Stop'
$wifi = @(Get-NetAdapter -Physical | Where-Object {
    $_.Status -eq 'Up' -and $_.NdisPhysicalMedium -eq 9
})
if ($wifi.Count -ne 1) {
    throw 'Expected one active Wi-Fi adapter. Check the network adapters before continuing.'
}
$address = @(Get-NetIPAddress -InterfaceIndex $wifi[0].ifIndex -AddressFamily IPv4 |
    Where-Object { $_.IPAddress -notlike '169.254.*' })
if ($address.Count -ne 1) { throw 'Expected one Wi-Fi IPv4 address.' }
$lanAddress = $address[0].IPAddress
$null = Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:3000/' -TimeoutSec 10
Start-Service iphlpsvc
& netsh interface portproxy add v4tov4 "listenaddress=$lanAddress" listenport=3000 connectaddress=127.0.0.1 connectport=3000
if ($LASTEXITCODE -ne 0) { throw 'Could not configure the website port forward.' }
$ruleName = 'EndPoint-WSL-Web-LAN'
Get-NetFirewallRule -Name $ruleName -ErrorAction SilentlyContinue | Remove-NetFirewallRule
New-NetFirewallRule -Name $ruleName -DisplayName 'EndPoint WSL website (local subnet)' `
    -Direction Inbound -Action Allow -Protocol TCP -LocalPort 3000 `
    -LocalAddress $lanAddress -RemoteAddress LocalSubnet -Profile Any `
    -InterfaceAlias $wifi[0].Name | Out-Null
# A running IP Helper can retain stale portproxy listeners after network changes.
# Restart only when the configured listener has not appeared.
Start-Sleep -Seconds 2
$listener = Get-NetTCPConnection -State Listen -LocalAddress $lanAddress -LocalPort 3000 -ErrorAction SilentlyContinue
if (-not $listener) {
    Write-Host 'Refreshing IP Helper to activate the port forward...'
    Restart-Service iphlpsvc -ErrorAction Stop
    for ($attempt = 0; $attempt -lt 15; $attempt++) {
        Start-Sleep -Seconds 1
        $listener = Get-NetTCPConnection -State Listen -LocalAddress $lanAddress -LocalPort 3000 -ErrorAction SilentlyContinue
        if ($listener) { break }
    }
}
if (-not $listener) {
    throw "Windows did not activate the portproxy listener on ${lanAddress}:3000. Run: netsh interface portproxy show all"
}
# Bypass any system HTTP proxy when checking the local network address.
$webClient = New-Object System.Net.WebClient
$webClient.Proxy = $null
try {
    $null = $webClient.DownloadString("http://${lanAddress}:3000/")
} finally {
    $webClient.Dispose()
}
Write-Host "Website HTTP OK: http://${lanAddress}:3000"
Write-Host 'Test this URL from another computer on the same Wi-Fi.'
