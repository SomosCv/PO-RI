#!/usr/bin/env bash

set -eu

echo "===== SYSTEM ====="
uname -a || true
cat /etc/os-release 2>/dev/null || true

echo
echo "===== RUNTIMES ====="
php -v 2>/dev/null || true
node -v 2>/dev/null || true
npm -v 2>/dev/null || true
python3 --version 2>/dev/null || true
composer --version 2>/dev/null || true

echo
echo "===== SERVICES ====="
ps aux | grep -Ei 'nginx|apache|httpd|php-fpm|mysql|mariadb|redis|postgres|supervisord|queue|node' | grep -v grep || true

echo
echo "===== PORTS ====="
ss -tulpn 2>/dev/null || true

echo
echo "===== ENV FILES ====="
find . -maxdepth 4 \( -name ".env" -o -name "*.env" -o -name "config.yml" -o -name "settings.py" -o -name "vite.config.*" -o -name "package.json" -o -name "composer.json" \) 2>/dev/null || true

echo
echo "===== LANGUAGE FILES ====="
find . -iname "*en.js" -o -iname "*es.js" -o -iname "*fr.js" -o -iname "*cards.js" 2>/dev/null || true

echo
echo "===== SEARCH currentLanguage ====="
grep -RIn "currentLanguage" . 2>/dev/null || true

echo
echo "===== SEARCH LANGUAGE_PACKS ====="
grep -RIn "LANGUAGE_PACKS" . 2>/dev/null || true

echo
echo "===== SEARCH window.CARDS ====="
grep -RIn "window.CARDS" . 2>/dev/null || true

echo
echo "===== SEARCH renderCards ====="
grep -RIn "renderCards" . 2>/dev/null || true

echo
echo "===== SEARCH getCards ====="
grep -RIn "getCards" . 2>/dev/null || true

echo
echo "===== JAVASCRIPT ERRORS ====="
find . -iname "*.js" -exec node --check {} \; 2>&1 || true

echo
echo "===== INDEX SCRIPT ORDER ====="
grep -RIn "<script" . 2>/dev/null || true

echo
echo "===== RECENT LOGS ====="
find . -iname "*.log" -exec tail -n 50 {} \; 2>/dev/null || true

echo
echo "===== DISK ====="
df -h || true

echo
echo "===== MEMORY ====="
free -h 2>/dev/null || true

echo
echo "===== ROOT CAUSE CHECKS ====="

grep -RIn "window.CARDS = getCards()" . 2>/dev/null || true
grep -RIn "currentLanguage" . 2>/dev/null | head -100 || true
grep -RIn "LANG.card" . 2>/dev/null || true

echo
echo "===== DONE ====="
