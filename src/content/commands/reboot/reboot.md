### Using powershell
```
Restart-Computer -Force -ComputerName &lt;fqdnRhost&gt;
```

### Using cmd
```
shutdown -r
```

### Reboot remote device (-m remote machine, -t = wait 0 seconds, -f = force)
```
shutdown -m \&lt;fqdnRhost&gt; -t 0 -r -f
```

### Using rundll32 (numbers: 0=logoff, 1=shutdown, 2=reboot, 4=force, 8=power off)
```
rundll32.exe user.exe,ExitWindowsExec 2
```


