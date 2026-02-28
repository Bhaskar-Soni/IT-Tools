/**
 * Zsh Script Format Template
 * For Zsh shell scripting
 */

export const zsh = {
  label: 'Zsh (.zsh)',
  extension: 'zsh',
  mimeType: 'text/x-shellscript',
  template: `#!/bin/zsh
# {{title}} - Zsh Script
# {{description}}

setopt errexit
setopt pipefail
setopt nounset

# Color codes for output
RED=$'\\033[0;31m'
GREEN=$'\\033[0;32m'
YELLOW=$'\\033[1;33m'
NC=$'\\033[0m' # No Color

# Functions
log_info() {
  echo "\${GREEN}[INFO]\${NC} \$1"
}

log_warn() {
  echo "\${YELLOW}[WARN]\${NC} \$1"
}

log_error() {
  echo "\${RED}[ERROR]\${NC} \$1" >&2
}

main() {
  log_info "Starting {{name}} script"
  
  # Add your script logic here
  
  log_info "Script completed successfully"
}

if [[ \${ZSH_EVAL_CONTEXT} == 'toplevel' ]]; then
  main "\$@"
fi
`,
};
