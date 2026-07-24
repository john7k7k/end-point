param(
    [switch]$Stop,
    [switch]$Reboot,
    [switch]$NoLog
)

$ErrorActionPreference = 'Stop'
$ProjectRoot = Split-Path -Parent $PSCommandPath
$AiDirectory = Join-Path $ProjectRoot 'AI'
$BackendDirectory = Join-Path $ProjectRoot 'backend'
$TestDirectory = Join-Path $AiDirectory 'test'
$RuntimeDirectory = 'runtime'
$PidFile = Join-Path $RuntimeDirectory 'service-pids.json'
$MediaMtxExecutable = 'C:\Users\user\Downloads\mediamtx_v1.17.1_windows_amd64\mediamtx.exe'
$MediaMtxConfig = Join-Path $AiDirectory 'mediamtx.yml'

New-Item -ItemType Directory -Force -Path $RuntimeDirectory | Out-Null

function Stop-ManagedServices {
    if (Test-Path $PidFile) {
        try {
            $pids = Get-Content -Raw $PidFile | ConvertFrom-Json
            foreach ($service in $pids.PSObject.Properties) {
                $process = Get-Process -Id $service.Value -ErrorAction SilentlyContinue
                if ($process) {
                    Stop-Process -Id $service.Value -Force
                    Write-Host "Stopped $($service.Name) (PID $($service.Value))"
                }
            }
        } finally {
            Remove-Item -Force $PidFile -ErrorAction SilentlyContinue
        }
    }

    # Also stop orphaned processes from a previous npm/python launcher.
    foreach ($port in 3000, 8000, 8554, 8888, 8889) {
        $listeners = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
        foreach ($listener in $listeners) {
            $process = Get-Process -Id $listener.OwningProcess -ErrorAction SilentlyContinue
            if ($process) {
                Stop-Process -Id $listener.OwningProcess -Force
                Write-Host "Stopped listener on port $port (PID $($listener.OwningProcess))"
            }
        }
    }
}

if ($Stop -and $Reboot) {
    throw 'Use either -Stop or -Reboot, not both.'
}

# Starting without switches keeps the existing safe behaviour: replace any old services.
Stop-ManagedServices
if ($Stop) {
    Write-Host 'Managed services stopped.'
    exit 0
}
if ($Reboot) {
    Write-Host 'Managed services restarted.'
}

if (-not (Test-Path $MediaMtxExecutable)) {
    throw "MediaMTX executable not found: $MediaMtxExecutable"
}

function Start-LoggedProcess {
    param(
        [string]$Name,
        [string]$FilePath,
        [string[]]$ArgumentList,
        [string]$WorkingDirectory
    )

    $startParameters = @{
        FilePath = $FilePath
        ArgumentList = $ArgumentList
        WorkingDirectory = $WorkingDirectory
        WindowStyle = 'Hidden'
        PassThru = $true
    }
    if (-not $NoLog) {
        $output = Join-Path $RuntimeDirectory "$Name.out.log"
        $error = Join-Path $RuntimeDirectory "$Name.err.log"
        Remove-Item -Force $output, $error -ErrorAction SilentlyContinue
        $startParameters.RedirectStandardOutput = $output
        $startParameters.RedirectStandardError = $error
    }
    return Start-Process @startParameters
}

$services = [ordered]@{}
$services.mediamtx = (Start-LoggedProcess -Name 'mediamtx' -FilePath $MediaMtxExecutable -ArgumentList @($MediaMtxConfig) -WorkingDirectory $AiDirectory).Id
Start-Sleep -Seconds 1
$services.backend = (Start-LoggedProcess -Name 'backend' -FilePath 'node' -ArgumentList @('src/app.js') -WorkingDirectory $BackendDirectory).Id
Start-Sleep -Seconds 1
$services.ai = (Start-LoggedProcess -Name 'ai' -FilePath 'python' -ArgumentList @('main.py') -WorkingDirectory $AiDirectory).Id
Start-Sleep -Seconds 1

$services | ConvertTo-Json | Set-Content -Encoding utf8 $PidFile
Write-Host 'Started MediaMTX, backend, and AI.'
if ($NoLog) { Write-Host 'Log output is disabled.' }
else { Write-Host "Logs: $RuntimeDirectory" }
