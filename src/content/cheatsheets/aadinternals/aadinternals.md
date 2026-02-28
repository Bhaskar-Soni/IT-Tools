### Source
https://github.com/Gerenios/AADInternals

### Install and Import
```
Install-Module AADInternals
Import-Module AADInternals.psd1
```

### Gather informations from AzureAD
```
Invoke-AADIntReconAsOutsider -DomainName &lt;tenant&gt;.onmicrosoft.com
```

### Read local config
```
Get-AADIntConfiguration
```

# Set user-agent in local config
```
Set-AADIntSetting -Setting "User-Agent" -Value "&lt;userAgent&gt;"
```

### Gather informations from AzureAD
```
Get-AADIntTenantDomains -Domain &lt;domain&gt;
```

# Show the cached credentials
```
Get-AADIntCache
```

# Clear the cache
```
Clear-AADIntCache
```

# Add access token to cache
```
Add-AADIntAccessTokenToCache -AccessToken "&lt;accessToken&gt;" -RefreshToken "&lt;refreshToken&gt;"
```

# Get access token for MS Graph API for "Microsoft Office" client using interactive login
```
Get-AADIntAccessToken -ClientId "&lt;clientId&gt;" -Resource "https://graph.microsoft.com"
```

# Parse access token
```
Read-AADIntAccesstoken -AccessToken &lt;accessToken&gt; -showdate
```

# Get access token from refresh token
```
Import-Module .\AccessToken_utils.ps1
Get-AADIntAccessTokenWithRefreshToken -ClientId "&lt;clientId&gt;" -Resource "https://graph.windows.net" -TenantId "&lt;tenantId&gt;" -RefreshToken &lt;refreshToken&gt;
```


