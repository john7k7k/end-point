#!/usr/bin/env bash
set -euo pipefail
server="${1:?Usage: bash check_lan.sh SERVER}"
mosquitto_sub -h "$server" -p 1883 -t 'vision/#' -W 3 -E
curl -fsS --max-time 5 "http://$server:3000/api/device/runtime"
printf '\n'
curl -fsS --max-time 5 "http://$server:8000/api/rgbd/status"
printf '\n'
