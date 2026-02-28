### Source
https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-windows?tabs=azure-cli

### Install
```
winget install -e --id Microsoft.AzureCLI
```

### Initial connect
```
az login -u &lt;user&gt;@&lt;tenant&gt;.onmicrosoft.com -p &lt;password&gt;
```

### Find commands for Vms
```
az find "vm"
```

### Get information about current tenant
```
az account tenant list
```

### List users
```
az ad user list
```

### List groups
```
az ad group list
```

### List user names of a group
```
az ad group member list -g "&lt;groupName&gt;" --query "[].[displayName]"
```

### List virtual machines
```
az vm list
```

### List webapps
```
az webapp list 
```

### List function apps
```
az functionapp list 
```

### List automation accounts
```
az extension add --upgrade -n automation
az automation account list
```

### Check if there is a user logged in via az cli
```
az ad signed-in-user show
```

### List storage accounts
```
az storage account list
```

### List keyvaults
```
az keyvault list
```

### List application objects registered in current domain
```
az ad app list
```

### Get information about specific application
```
az ad app show --id &lt;id&gt;
```

### Show owner of application
```
az ad app owner list --id &lt;id&gt;
```

### List service principals
```
az ad sp list --all
```

### Get information about specific service principal
```
az ad sp show --id &lt;id&gt;
```

### Get owner of service principal
```
az ad sp owner list --id &lt;id&gt;
```

### Request access token (the token itself can not be used by az)
```
az account get-access-token
```

### Request graph token
```
az account get-access-token --resource-type ms-graph
```

### Clear all tokens
```
az logout
```


