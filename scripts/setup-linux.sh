#!/usr/bin/env bash
# Ubuntu/WSL2. Does not install OS packages or change existing databases.
set -euo pipefail
ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
for tool in python3 node npm ffmpeg curl tar; do
  command -v "$tool" >/dev/null || { echo "Missing $tool. See LINUX_WSL.md" >&2; exit 1; }
done
node -e 'if(Number(process.versions.node.split(".")[0])<22) {console.error("Node.js 22+ required");process.exit(1)}'
python3 -c 'import sys; assert sys.version_info >= (3, 10), "Python 3.10+ required"'
python3 -m venv "$ROOT/.venv"
"$ROOT/.venv/bin/python" -m pip install -r "$ROOT/AI/requirements.txt"
# npm ci replaces dependencies: do not share node_modules with Windows.
npm --prefix "$ROOT/backend" ci
npm --prefix "$ROOT/frontend" ci
npm --prefix "$ROOT/frontend" run build
VERSION=1.17.1
case "$(uname -m)" in
  x86_64) ARCH=amd64 ;;
  aarch64|arm64) ARCH=arm64 ;;
  *) echo 'Unsupported MediaMTX architecture' >&2; exit 1 ;;
esac
TARGET="$ROOT/.tools/mediamtx-$VERSION"
if [[ ! -x "$TARGET/mediamtx" ]]; then
  TEMP_DIR="$(mktemp -d)"
  trap 'rm -rf -- "$TEMP_DIR"' EXIT
  ASSET="mediamtx_v${VERSION}_linux_${ARCH}.tar.gz"
  BASE="https://github.com/bluenviron/mediamtx/releases/download/v$VERSION"
  curl --fail --location --retry 3 "$BASE/$ASSET" -o "$TEMP_DIR/$ASSET"
  curl --fail --location --retry 3 "$BASE/checksums.sha256" -o "$TEMP_DIR/checksums.sha256"
  # Official manifests use the binary marker: "<hash> *<filename>".
  # Accept both standard text and binary checksum records.
  (cd "$TEMP_DIR"; { grep -F -e " *$ASSET" -e "  $ASSET" checksums.sha256 || exit 1; } | sha256sum --check --strict)
  mkdir -p "$TARGET"
  tar -xzf "$TEMP_DIR/$ASSET" -C "$TARGET" mediamtx
  chmod +x "$TARGET/mediamtx"
fi
echo 'Dependencies installed. Next: bash start-system.sh --check'
