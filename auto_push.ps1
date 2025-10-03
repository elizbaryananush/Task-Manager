$logFile = "C:\Users\user\Desktop\nushik\project1\auto_push.log"
"----- Auto-push started at $(Get-Date) -----" | Out-File -Append $logFile

Set-Location "C:\Users\user\Desktop\nushik\project1"

# Debug info
git status | Out-File -Append $logFile
git branch | Out-File -Append $logFile

# Add and commit
git add .
$time = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Auto-commit at $time" | Out-File -Append $logFile

# Push
git push origin version001 | Out-File -Append $logFile

"----- Auto-push finished at $(Get-Date) -----`n" | Out-File -Append $logFile
