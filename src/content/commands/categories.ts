export const commandCategories = [
  {
    name: 'Automation Commands', items: ['ansible'],
  },
  {
    name: 'Cloud Commands', items: ['autodiscoverenum', 'aws', 'azurehound-usefull-queries', 'gcloud', 'o365spray', 'oh365userfinder', 'onedriveenum', 'su', 'teamfiltration', 'teamsenum', 'teamsuserenum', 'tr'],
  },
  {
    name: 'DevOps Commands', items: ['docker', 'docker-compose', 'git'],
  },
  {
    name: 'Forensic Commands', items: ['sigthief', 'volatility', 'yara'],
  },
  {
    name: 'Hunting Commands', items: ['bloodhound-py', 'bloodhound-usefull-queries', 'certipy', 'coercer', 'crackmapexec', 'dpapi', 'evil-winrm', 'gmsadumper', 'impacket-addcomputer', 'impacket-dcomexec', 'impacket-getadusers', 'impacket-getnpusers', 'impacket-getst', 'impacket-gettgt', 'impacket-getuserspns', 'impacket-golden-ticket-inner-realm', 'impacket-lookupsid', 'impacket-mssqlclient', 'impacket-netview', 'impacket-ntlmrelayx', 'impacket-psexec', 'impacket-secretsdump', 'impacket-smbclient', 'impacket-smbexec', 'impacket-smbserver', 'impacket-wmiexec', 'impacket-wmiquery', 'ip', 'kerbrute', 'lsassy', 'ntlmrecon', 'petitpotam', 'privilege-escalation', 'ps', 'pylaps', 'pypykatz', 'pywhisker', 'pywsus', 'roadrecon', 'sccmhunter', 'sccmwtf', 'seth', 'smbclient', 'ss'],
  },
  {
    name: 'Linux Commands', items: ['7z', 'aircrack-ng', 'aireplay-ng', 'airodump-ng', 'arp-spoofing', 'awk', 'convert-cap-format', 'cover-tracks-in-shell-history', 'crontab', 'crunch', 'cryptsetup', 'curl', 'date', 'davtest', 'dconf', 'debug-wifi', 'dig', 'disable-dhcp-for-interface', 'dmesg', 'dpkg', 'efibootmgr', 'exploit-suggester', 'feh', 'ffmpeg', 'fish', 'ftp', 'fwupdmgr', 'gcc', 'gowitness', 'gpg', 'grep', 'grub', 'gsettings', 'hashcat', 'host', 'infoga', 'ipcalc', 'ipinfo', 'iptables', 'iw', 'john', 'journalctl', 'jq', 'keepass2john', 'ldap-domain-dump', 'ldap-scanner', 'ldapsearch', 'ldd', 'ldeep', 'leetlinked', 'letitgo', 'linkfinder', 'linux-exploit-suggester', 'localectl', 'log4j-scan', 'lse', 'lsof', 'lyncsmash', 'lynx', 'massdns', 'mat2', 'metagoofil', 'mingw', 'modprobe', 'mogrify', 'mount', 'mount-android', 'msfvenom', 'mysqldump', 'nc', 'network-manager', 'nmcli', 'numfmt', 'openssl', 'packmypayload', 'pacman', 'pagodo', 'pandoc', 'pdftk', 'pgrep', 'phishing-html-linter', 'postgresql', 'powerhub', 'pret', 'proxychains', 'python', 'rdesktop', 'regular-expressions', 'responder', 'rlwrap', 'rshell', 'rsync', 'screen', 'screenshot', 'searchsploit', 'security-related-logs', 'sed', 'setxkbmap', 'sigurlfind3r', 'silentbridge', 'simple-mtpfs', 'simplyemail', 'sj', 'smap', 'smbcrawler', 'smbmap', 'smime', 'smtp-user-enum', 'snmpwalk', 'socat', 'spk', 'split', 'spoofy', 'sprayingtoolkit', 'sqllite3', 'sqlmap', 'ssh', 'ssh-audit', 'ssh-keygen', 'sshpass', 'sshuttle', 'static-ip-address', 'subfinder', 'swaks', 'swap', 'sysctl', 'systemd-run-script-every-x-seconds', 'tail', 'tcpdump', 'telnet', 'testssl', 'tinyproxy', 'tmux', 'trufflehog', 'tshark', 'ufw', 'unshadow', 'usermod', 'vim', 'vncviewer', 'waybackurls', 'wcvs', 'webpalm', 'wep', 'wes', 'wfuzz', 'wg', 'wget', 'whatweb', 'whois', 'wifi-pineapple', 'woeusb', 'wpa2', 'wpa-supplicant', 'wps', 'wpscan', 'wsgidav', 'xargs', 'xdotool', 'xev', 'xfreerdp', 'xmllint', 'yay', 'youtube-dl', 'ysoserial', 'zip'],
  },
  {
    name: 'MISC Commands', items: ['base64', 'bluetooth', 'boltctl', 'change-mac-address', 'change-magic-bytes', 'column', 'dancingrighttoleft', 'dementor'],
  },
  {
    name: 'Network Commands', items: ['dnscat2', 'gethostbyaddress', 'gethostbyname', 'gethostentry', 'ipconfig', 'net', 'netadapterbinding', 'netfirewall', 'netsessionenum', 'netsh', 'nettcpconnection', 'netwkstauserenum', 'nslookup', 'smbshare', 'smbshareaccess'],
  },
  {
    name: 'PowerShell Commands', items: ['add-type', 'clixml', 'export-csv', 'itemproperty', 'powershell-download', 'powershell-environment-variables', 'powershell-execute-cs-binary', 'powershell-execution-policy', 'powershell-history', 'powershell-language-restrictions', 'powershell-nslookup-execution', 'powershell-remote', 'select', 'select-string', 'wmic', 'wmiobject'],
  },
  {
    name: 'Tool Commands', items: ['accesschk', 'adcomputer', 'adgroupmember', 'adorganizationalunit', 'adsisearcher', 'amass', 'aquatone', 'base64encodedecode', 'bbot', 'bhqc', 'bitsadmin', 'bofhound', 'burp', 'byp4xx', 'chimera', 'chromium', 'cmsmap', 'cmstp', 'configsecuritypolicy', 'credmaster', 'crosslinked', 'csc', 'csprecon', 'devicecredentialdeployment', 'dirsearch', 'dirsync', 'dnsreaper', 'dnsrecon', 'dnstwist', 'dnsx', 'droopescan', 'dsacls', 'dsquery', 'emailall', 'enum4linux', 'exiftool', 'extrac32', 'extractor', 'fakelogonscreen', 'favfreak', 'fcrackzip', 'ffuf', 'fgpp', 'forkdump', 'gato', 'gitfive', 'gitleaks', 'gittools', 'gobuster', 'gpo', 'gpresult', 'group3r', 'guestfist', 'guestmount', 'hakrawler', 'handlekatz', 'holehe', 'hostapd-wpe', 'hydra', 'icacls', 'icmpsh', 'ike-scan', 'installed-dot-net-version', 'joomscan', 'katana', 'klist', 'lazagne', 'lets-encrypt', 'lyncsniper', 'mailsniper', 'mergecap', 'metasploit', 'meterpreter', 'mirrordump', 'mofcomp', 'move-adobject', 'msbuild', 'neo4j', 'nessus', 'nikto', 'nltest', 'nmap', 'noseyparker', 'ntsdutil', 'nuclei', 'osquery', 'patrolcli', 'port-scan-tcp', 'powercat', 'powerextract', 'powergpoabuse', 'powershellicmp', 'ppldump', 'procdump', 'psreadlineoption', 'qubes', 'reg', 'registry', 'rubber-ducky', 'scanrepo', 'screensaver-persist', 'scriptrunner', 'seatbelt', 'securestring', 'sendemail', 'sendmail', 'spartacus', 'tbres', 'virtualbox', 'volumiser', 'win-brute-login', 'word-dde'],
  },
  {
    name: 'Windows Commands', items: ['appcmd', 'archive', 'attrib', 'certreq', 'certutil', 'cmd-environment-variables', 'conhost', 'copy', 'createinstance', 'createshortcut', 'desktopimgdownldr', 'dir', 'esentutl', 'expand', 'find', 'findstr', 'forfiles', 'fsquirt', 'get-acl', 'get-childitem', 'get-filehash', 'get-gpinheritance', 'get-gpppassword', 'get-help', 'get-history', 'get-hotfix', 'get-mdfhashes', 'get-proxy-settings', 'get-psdrive', 'get-spns', 'get-wmiobject', 'iis', 'invoke-command', 'msedge', 'msi', 'msiexec', 'mssql', 'new-gplink', 'presentationsettings', 'printbrm', 'process', 'procmon', 'quser', 'qwinsta', 'reboot', 'replace', 'runas', 'run-command-as-base64', 'rundll32', 'runonce', 'schtasks', 'service', 'set', 'set-gpprefregistryvalue', 'set-winuserlanguagelist', 'shutdown', 'sqlcmd', 'startup-folders', 'tar', 'tree', 'upload-file', 'vssadmin', 'winevent'],
  },
];

export default commandCategories;
