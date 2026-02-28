### Get GPO for given OU - requires Remote Server Administration Tools - default on domain controller
```
Get-GPInheritance -Target '&lt;dinstiguishedName&gt;'
```

### Show verbose
```
Get-GPInheritance -Target '&lt;dinstiguishedName&gt;' | select-object -expandproperty InheritedGpoLinks
```


