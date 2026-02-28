### Compute expiration date
```
$base64 = "&lt;base64&gt;"
$bytes = [System.Convert]::FromBase64String($base64)
$ft = [System.BitConverter]::ToInt64($bytes, 0)
$expiration = [DateTime]::FromFileTimeUtc($ft)
Write-Host "Expiration time (UTC): $expiration"
```


