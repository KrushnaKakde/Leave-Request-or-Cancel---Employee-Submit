@echo off
echo Cleaning React installation...
echo.

echo Step 1: Removing node_modules and package-lock.json...
rmdir /s /q node_modules 2>nul
del package-lock.json 2>nul
del npm-shrinkwrap.json 2>nul

echo.
echo Step 2: Clearing npm cache...
call npm cache clean --force

echo.
echo Step 3: Installing React 18 dependencies...
call npm install

echo.
echo Step 4: Verifying React version...
call npm list react react-dom react-router-dom

echo.
echo Step 5: Starting development server...
call npm run dev

pause
