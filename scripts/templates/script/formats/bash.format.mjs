/**
 * Bash Script Format Template
 * For Linux/Unix systems
 */

export const bash = {
  label: 'Bash (.sh)',
  extension: 'sh',
  mimeType: 'text/x-shellscript',
  template: `#!/bin/bash
# {{title}} - Bash Script
# {{description}}

set -euo pipefail

# Color codes for output
RED='\\033[0;31m'
GREEN='\\033[0;32m'
YELLOW='\\033[1;33m'
NC='\\033[0m' # No Color

# Functions
log_info() {
  echo -e "\${GREEN}[INFO]\${NC} \$1"
}

log_warn() {
  echo -e "\${YELLOW}[WARN]\${NC} \$1"
}

log_error() {
  echo -e "\${RED}[ERROR]\${NC} \$1"
}

# Main execution
main() {
  log_info "Starting {{name}}"
  
  # Add your script logic here
  log_info "Script completed successfully"
}

# Run main function
main "\$@"
`,
};
