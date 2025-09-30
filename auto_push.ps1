# Navigate to your project folder
Set-Location "C:\Users\user\Desktop\nushik\project1"

# Add all changes
git add .

# Commit with timestamp
$time = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Auto-commit at $time"

# Push to version001 branch
git push origin version001
