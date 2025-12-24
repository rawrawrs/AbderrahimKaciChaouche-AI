@echo off
echo Starting AAIS Development Environment...

REM Check if concurrently is installed
npm list -g concurrently >nul 2>&1
if errorlevel 1 (
    echo Installing concurrently globally...
    npm install -g concurrently
)

REM Start both frontend and backend services
concurrently "npm run dev" "cd backend && npm run dev"

pause