@echo off
cd /d %~dp0
echo ==========================================
echo Starting High-End V2 Preview (CLEAN INSTALL)...
echo This will fix the 'missing module' error.
echo ==========================================

echo [1/4] Cleaning old files...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json

echo [2/4] Installing dependencies (Tailwind & React)...
echo This may take 1-2 minutes. Please wait...
call npm install

echo [3/4] Verifying installation...
if not exist node_modules\tailwindcss (
    echo [ERROR] Tailwind CSS installation failed!
    pause
    exit /b
)

echo [4/4] Starting Server...
echo ==========================================
echo SUCCESS! Opening preview...
echo ==========================================
npm run dev
pause
