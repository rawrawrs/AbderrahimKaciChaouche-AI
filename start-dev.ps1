Write-Host "Starting AAIS Development Environment..."

# Check if concurrently is installed
try {
    npm list -g concurrently | Out-Null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Installing concurrently globally..."
        npm install -g concurrently
    }
} catch {
    Write-Host "Installing concurrently globally..."
    npm install -g concurrently
}

# Start both frontend and backend services
concurrently "npm run dev" "cd backend && npm run dev"