@echo off
echo ========================================
echo   CCAG Auto-Commit Watcher
echo   Watching for changes...
echo   Press Ctrl+C to stop
echo ========================================

:loop
timeout /t 30 /nobreak >nul
cd /d "c:\Users\USER\ChordApp"

git diff --quiet && git diff --cached --quiet
if errorlevel 1 (
    echo.
    echo [%time%] Changes detected - committing...
    git add .
    git commit -m "auto: update %date% %time%"
    git push
    echo [%time%] Pushed to GitHub!
) else (
    echo [%time%] No changes.
)
goto loop
