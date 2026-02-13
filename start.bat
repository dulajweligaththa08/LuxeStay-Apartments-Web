@echo off
echo.
echo ========================================
echo  RA RAINBOW APARTMENT - STARTING...
echo ========================================
echo.

echo [1/2] Starting Backend Server...
start cmd /k "cd server && node server.js"
timeout /t 3 /nobreak > nul

echo [2/2] Starting Frontend Server...
start cmd /k "npm run dev"

echo.
echo ========================================
echo  SERVERS STARTED!
echo ========================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:5173
echo.
echo Press any key to exit this window...
pause > nul
