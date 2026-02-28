/**
 * YAML/Ansible Format Template
 * For Ansible playbooks
 */

export const yaml = {
  label: 'YAML (.yml)',
  extension: 'yml',
  mimeType: 'text/yaml',
  template: `---
# {{title}} - Ansible Playbook
# {{description}}

- name: {{title}} Playbook
  hosts: all
  gather_facts: yes
  
  vars:
    script_name: "{{name}}"
    script_version: "1.0.0"
  
  tasks:
    - name: Display script information
      debug:
        msg: |
          Script: {{ script_name }}
          Version: {{ script_version }}
          Description: {{description}}
      run_once: true
    
    # Add your tasks here
    
    - name: Task completed
      debug:
        msg: "{{title}} playbook completed successfully"
      run_once: true
`,
};
