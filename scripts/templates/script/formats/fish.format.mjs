/**
 * Fish Script Format Template
 * For Fish shell scripting
 */

export const fish = {
  label: 'Fish (.fish)',
  extension: 'fish',
  mimeType: 'text/x-shellscript',
  template: `#!/usr/bin/env fish
# {{title}} - Fish Script
# {{description}}

set -e

# Color codes for output
set RED (set_color red)
set GREEN (set_color green)
set YELLOW (set_color yellow)
set NC (set_color normal)

# Functions
function log_info
  echo "\$GREEN[INFO]\$NC \$argv"
end

function log_warn
  echo "\$YELLOW[WARN]\$NC \$argv"
end

function log_error
  echo "\$RED[ERROR]\$NC \$argv" >&2
end

function main
  log_info "Starting {{name}} script"
  
  # Add your script logic here
  
  log_info "Script completed successfully"
end

main \$argv
`,
};
