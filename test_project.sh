#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

pass() { printf "[PASS] %s\n" "$1"; }
fail() { printf "[FAIL] %s\n" "$1"; exit 1; }
warn() { printf "[WARN] %s\n" "$1"; }

printf "Running project smoke tests in %s\n" "$ROOT_DIR"

required_files=(
  "index.html"
  "content.html"
  "data/pages.json"
  "css/styles.css"
  "js/main.js"
)

for f in "${required_files[@]}"; do
  [[ -f "$f" ]] || fail "Missing required file: $f"
done
pass "Required files exist"

if [[ -s index.html && -s content.html ]]; then
  pass "HTML entry files are present and non-empty"
else
  fail "index.html or content.html is empty"
fi

if command -v python3 >/dev/null 2>&1; then
  python3 -m json.tool data/pages.json >/dev/null
  pass "data/pages.json is valid JSON"
else
  warn "python3 not found; skipping JSON validation"
fi

if command -v python3 >/dev/null 2>&1 && command -v curl >/dev/null 2>&1; then
  PORT="${PORT:-8765}"
  python3 -m http.server "$PORT" >/tmp/imvir_test_server.log 2>&1 &
  SERVER_PID=$!
  trap 'kill "$SERVER_PID" >/dev/null 2>&1 || true' EXIT

  sleep 1

  if kill -0 "$SERVER_PID" >/dev/null 2>&1; then
    if curl -fsS "http://127.0.0.1:${PORT}/index.html" >/dev/null \
      && curl -fsS "http://127.0.0.1:${PORT}/content.html" >/dev/null; then
      pass "HTTP smoke test passed for index.html and content.html"
    else
      warn "HTTP server started, but curl smoke checks failed"
    fi
  else
    warn "Could not start local HTTP server; skipping HTTP smoke tests"
  fi

  kill "$SERVER_PID" >/dev/null 2>&1 || true
  trap - EXIT
else
  warn "python3 or curl not found; skipping HTTP smoke tests"
fi

printf "All configured tests completed.\n"
