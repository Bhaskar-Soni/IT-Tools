/**
 * PowerShell Script Format Template
 * For Windows PowerShell
 */

export const powershell = {
  label: 'PowerShell (.ps1)',
  extension: 'ps1',
  mimeType: 'text/x-powershell',
  template: `# {{title}} - PowerShell Script
# {{description}}

param(
    [switch]$Verbose = $false
)

function Write-Info {
    param([string]$Message)
    Write-Host "[INFO] $Message" -ForegroundColor Green
}

function Write-Warn {
    param([string]$Message)
    Write-Host "[WARN] $Message" -ForegroundColor Yellow
}

function Write-Error-Custom {
    param([string]$Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

function Main {
    Write-Info "Starting {{name}}"
    
    # Add your script logic here
    
    Write-Info "Script completed successfully"
}

# Run main function
Main
`,
};
