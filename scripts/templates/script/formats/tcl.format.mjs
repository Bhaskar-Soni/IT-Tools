/**
 * Tcl Script Format Template
 * For Tcl scripting language
 */

export const tcl = {
  label: 'Tcl (.tcl)',
  extension: 'tcl',
  mimeType: 'text/x-tcl',
  template: `#!/usr/bin/env tclsh

# {{title}} - Tcl Script
# {{description}}

# Color codes for output
set RED "\\033\[0;31m"
set GREEN "\\033\[0;32m"
set YELLOW "\\033\[1;33m"
set NC "\\033\[0m"

# Procedures
proc log_info {message} {
  global GREEN NC
  puts "\${GREEN}\[INFO\]\${NC} \$message"
}

proc log_warn {message} {
  global YELLOW NC
  puts "\${YELLOW}\[WARN\]\${NC} \$message"
}

proc log_error {message} {
  global RED NC
  puts stderr "\${RED}\[ERROR\]\${NC} \$message"
}

# Main script
proc main {} {
  log_info "Starting {{name}} script"
  
  # Add your script logic here
  
  log_info "Script completed successfully"
}

# Run main procedure
if {[catch {main} result]} {
  log_error "An error occurred: \$result"
  exit 1
}
`,
};
