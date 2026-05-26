#!/usr/bin/env bash

set -eu

echo "===== SYSTEM ====="
uname -a || true
cat /etc/os-release 2>/dev/null || true

echo
echo "===== RUNTIMES ====="
node -v 2>/dev/null || true
npm -v 2>/dev/null || true
php -v 2>/dev/null || true
python3 --version 2>/dev/null || true

echo
echo "===== FILES ====="
find . -maxdepth 3 -type f | sort

echo
echo "===== LANGUAGE FILES ====="
find . -iname "*.js" | grep -Ei "languages|cards|info-content|script"

echo
echo "===== currentLanguage REFERENCES ====="
grep -RIn "currentLanguage" . 2>/dev/null || true

echo
echo "===== LANGUAGE_PACKS REFERENCES ====="
grep -RIn "LANGUAGE_PACKS" . 2>/dev/null || true

echo
echo "===== getCards REFERENCES ====="
grep -RIn "getCards" . 2>/dev/null || true

echo
echo "===== window.CARDS REFERENCES ====="
grep -RIn "window.CARDS" . 2>/dev/null || true

echo
echo "===== renderCards REFERENCES ====="
grep -RIn "renderCards" . 2>/dev/null || true

echo
echo "===== INFO_CONTENT REFERENCES ====="
grep -RIn "INFO_CONTENT" . 2>/dev/null || true

echo
echo "===== SCRIPT LOAD ORDER ====="
grep -n "<script" index.html || true

echo
echo "===== JAVASCRIPT PARSE CHECK ====="
find . -iname "*.js" -exec node --check {} \; 2>&1 || true

echo
echo "===== DATA FLOW TRACE ====="
echo "languages/*.js -> currentLanguage -> getCards() -> window.CARDS -> renderCards() -> DOM"
echo "info-content.js -> INFO_CONTENT -> openInfoModal() -> DOM"

echo
echo "===== ROOT CAUSE ANALYSIS ====="

echo "1. cards.js builds window.CARDS before language changes."
echo "2. applyLanguage() changes currentLanguage but does not rebuild INFO_CONTENT."
echo "3. renderCards() only renders existing window.CARDS array."
echo "4. INFO_CONTENT remains hardcoded English."
echo "5. Existing modal DOM is never regenerated after language changes."

echo
echo "===== FAILURE POINTS ====="

echo "FAILURE A:"
grep -RIn "window.CARDS = getCards()" . 2>/dev/null || true

echo
echo "FAILURE B:"
grep -RIn "renderCards();" . 2>/dev/null || true

echo
echo "FAILURE C:"
grep -RIn "window.INFO_CONTENT" . 2>/dev/null || true

echo
echo "===== ROOT CAUSE HYPOTHESIS ====="
echo "High confidence:"
echo "The app mixes static pre-rendered English data structures with dynamic language state."
echo "Cards and modal content are generated once and never fully rebuilt from translated sources."

echo
echo "===== IMMEDIATE MITIGATION ====="
echo "1. Rebuild window.CARDS inside applyLanguage()."
echo "2. Re-render cards after rebuilding."
echo "3. Convert INFO_CONTENT into language-aware generator functions."
echo "4. Remove hardcoded English strings from cards.js and info-content.js."

echo
echo "===== PERMANENT FIX ====="
echo "Centralize ALL user-facing text into language files."
echo "Generate cards and modal content dynamically from current language."
echo "Never store translated UI as static initialized arrays."

echo
echo "===== MONITORING ====="
echo "1. Add console assertions for missing translation keys."
echo "2. Add runtime checks for undefined LANGUAGE_PACKS entries."
echo "3. Add snapshot tests for each language."

echo
echo "===== RESOURCE CHECKS ====="
df -h || true
free -h 2>/dev/null || true

echo
echo "===== DONE ====="

