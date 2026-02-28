### Install
```
Install-Module Az
```

### Initial connect
```
$pw = ConvertTo-SecureString "&lt;password&gt;" -AsPlainText -Force
$cred = New-Object System.Management.Automation.PSCredential
("&lt;user&gt;@&lt;tenant&gt;.onmicrosoft.com", $pw)
Connect-AzAccount -Credential $cred
```

### List curennt context
```
Get-AzContext -ListAvailable
```

### Get custom defined roles 
```
Get-AzureADMSRoleDefinition | ?{_.IsBUiltin -eq $False} | Select Displayname
```

### Get group member
```
Get-AzADGroupMember -GroupDisplayName '&lt;name&gt;'
```

### Get all resources visible to current user
```
Get-AzResource
```

### Get all resource groups visible to current user
```
Get-AzResourceGroup
```

### Get details about deployment of specific resource group
```
Get-AzResourceGroupDeployment -ResourceGroupName '&lt;name&gt;'
```

### Download resource group deployment template 
```
Save-AzResourceGroupDeploymentTemplate -ResourceGroupName &lt;name&gt; -DeploymentName &lt;deploymentName&gt;
```

### List all RBAC role assignments
```
Get-AzRoleAssigment
```

### List all RBAC roles for specific user
```
Get-AzRoleAssignment -SignInName &lt;user&gt;@&lt;tenant&gt;.onmicrosoft.com
```

### List all service principals 
```
Get-AzADServicePrincipal
```

### Get details about specific service principal
```
Get-AzADServicePrincipal -ObjectId &lt;id&gt;
```

### List accessible key vaults
```
Get-AzKeyVault
```

### Access key vault
```
Get-AzKeyvaultsecret -VaultName &lt;name&gt;
Get-AzKeyVault -VaultName &lt;vaultName&gt; -Name &lt;secretName&gt; -AsPlainTex
```

### List all virtual machines where current user has at least Reader role
```
Get-AzVM
```

### List visble network profiles
```
Get-AzVM -Name &lt;name&gt; | Select -ExpandProperty NetworkProfile
```

### Get details about extension
```
Get-AzVMExtension -ResourceGroupName &lt;resourceGroupName&gt; -VMName &lt;name&gt; | Select -ExpandProperty NetworkProfile
```

### Create new vm extension
```
Set-AzVMExtension -ResourceGroupName &lt;resourceGroupName&gt; -ExtensionName "ExecCmd" -VMName &lt;VMName&gt; -Location "&lt;location&gt;" -Publisher Microsoft.Compute -ExtensionType CustomScriptExtension -TypeHandlerVersion 1.8 -SettingString '{"commandToExecute":"powershell &lt;command&gt;"}'
```

### Run command
```
Invoke-AzVMRunCommand -ScriptPath &lt;file&gt;.ps1 -CommandId "&lt;someName&gt;" -VMName "&lt;name&gt;" -ResourceGroupName "&lt;name&gt;"
```

### Run command via runbook
```
Import-AzAutomationRunbook -Name &lt;runName&gt; -Path &lt;local\path\to\ps1&gt; -AutomationAccountName &lt;name&gt; -ResourceGroupName &lt;name&gt; -Type PowerShell -Force -Verbose
Publish-AzAutomationRunbook -RunbookName &lt;runName&gt; -AutomationAccountName &lt;name&gt; -ResourceGroupName &lt;name&gt; -Verbose
Start-AzAutomationRunbook -RunbookName &lt;name&gt; -RunOn &lt;workGroup&gt; -AutomationAccountName &lt;name&gt; -ResourceGroupName &lt;name&gt;
```

### List visible storage accounts
```
Get-AzStorageAccount 
```

### Get content of storage container
```
Get-AzStorageContainer -Context (Get-AzStorageAccount -Name &lt;name&gt; -ResourceGroupName &lt;resourceGroupName&gt;).Context
```

### List visible service apps and function apps
```
Get-AzWebApp | ?{$_.Kind -notmatch "functionapp"}
Get-AzFunctionApp
```

### Request access token for current session
```
(Get-AzAccessToken).Token
```

### Request access token for AAD Graph and Azure AD 
```
Get-AzAccessToken -ResourceTypeName MSGraph
```

### Use access token and graph token
```
Connect-AzAccount -AccountId &lt;user&gt;@&lt;tenant&gt;.onmicrosoft.com -AccessToken &lt;token&gt; -MicrosoftGraphAccessToken &lt;graphToken&gt;
```

### List connections attached to Function App
```
az functionapp hybrid-connection list --name &lt;functionAppName&gt; --resource-group &lt;resourceGroupName&gt;
```


