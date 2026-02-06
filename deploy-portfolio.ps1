# 🚀 Automated Portfolio Deployment Script
# Run this script after installing Node.js

Write-Host "🚀 Starting portfolio deployment..." -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking for Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    $npmVersion = npm --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
    Write-Host "✅ npm found: $npmVersion" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "❌ Node.js is not installed or not in PATH!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Node.js from: https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "Then restart PowerShell and run this script again." -ForegroundColor Yellow
    exit 1
}

# Navigate to React app directory
$reactAppPath = Join-Path $PSScriptRoot "Update portfolio webpage"
if (-not (Test-Path $reactAppPath)) {
    Write-Host "❌ React app directory not found: $reactAppPath" -ForegroundColor Red
    exit 1
}

Set-Location $reactAppPath
Write-Host "📁 Changed to: $reactAppPath" -ForegroundColor Cyan
Write-Host ""

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Dependencies installed" -ForegroundColor Green
Write-Host ""

# Build the React app
Write-Host "🔨 Building React app..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build completed successfully!" -ForegroundColor Green
Write-Host ""

# Check if dist folder exists
$distPath = Join-Path $reactAppPath "dist"
if (-not (Test-Path $distPath)) {
    Write-Host "❌ dist folder not found after build!" -ForegroundColor Red
    exit 1
}

# Go back to repository root
Set-Location $PSScriptRoot
Write-Host "📁 Changed to repository root: $PSScriptRoot" -ForegroundColor Cyan
Write-Host ""

# Copy built files to root
Write-Host "📋 Copying built files to repository root..." -ForegroundColor Yellow
Copy-Item -Path "$distPath\*" -Destination $PSScriptRoot -Recurse -Force
Write-Host "✅ Files copied successfully" -ForegroundColor Green
Write-Host ""

# Show git status
Write-Host "📊 Git status:" -ForegroundColor Cyan
git status --short
Write-Host ""

# Ask for confirmation before committing
Write-Host "Ready to commit and push changes?" -ForegroundColor Yellow
$confirmation = Read-Host "Type 'yes' to proceed, or 'no' to cancel"
if ($confirmation -ne 'yes') {
    Write-Host "Deployment cancelled. Files are ready but not committed." -ForegroundColor Yellow
    exit 0
}

# Commit changes
Write-Host ""
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git add .
git commit -m "Deploy React portfolio to GitHub Pages"
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Commit failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Changes committed" -ForegroundColor Green
Write-Host ""

# Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
git push origin master
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Push failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Pushed to GitHub successfully!" -ForegroundColor Green
Write-Host ""

Write-Host "=" * 60 -ForegroundColor Green
Write-Host "✅ DEPLOYMENT COMPLETE!" -ForegroundColor Green
Write-Host "=" * 60 -ForegroundColor Green
Write-Host ""
Write-Host "Your portfolio will be live at:" -ForegroundColor Cyan
Write-Host "https://aminahamdani.github.io/amina-portfolio/" -ForegroundColor White
Write-Host ""
Write-Host "⏳ Wait 2-5 minutes for GitHub Pages to rebuild" -ForegroundColor Yellow
Write-Host "🔄 Clear browser cache (Ctrl+Shift+R) if you see old version" -ForegroundColor Yellow
Write-Host ""
