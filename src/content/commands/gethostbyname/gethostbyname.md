### Resolve hostname
```
$hostEntry = [System.Net.Dns]::GetHostByName("&lt;hostname&gt;")
$hostEntry.AddressList[0].IPAddressToString
```


