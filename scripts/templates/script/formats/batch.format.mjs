/**
 * Batch Script Format Template
 * For Windows batch files
 */

export const batch = {
  label: 'Batch (.bat)',
  extension: 'bat',
  mimeType: 'text/x-batch',
  template: `@echo off
REM {{title}} - Batch Script
REM {{description}}

setlocal enabledelayedexpansion

REM Color codes
set "INFO=[INFO]"
set "WARN=[WARN]"
set "ERROR=[ERROR]"

REM Functions
:log_info
  echo %INFO% %~1
  exit /b 0

:log_warn
  echo %WARN% %~1
  exit /b 0

:log_error
  echo %ERROR% %~1
  exit /b 0

REM Main execution
echo {{title}}
echo {{description}}
echo.

REM Add your script logic here

echo.
echo Batch script completed successfully
pause
`,
};
