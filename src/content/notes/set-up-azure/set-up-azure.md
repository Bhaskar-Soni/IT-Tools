## Create Tenant
### Create developer account and configure Microsoft 365 E5 sandbox
* https://learn.microsoft.com/en-us/azure/active-directory/verifiable-credentials/how-to-create-a-free-developer-account
* https://docs.microsoft.com/en-us/office/developer-program/microsoft-365-developer-program-get-started
* https://developer.microsoft.com/en-us/microsoft-365/dev-program
&gt; Join Now (you might need to wait a few hours after account creation) &gt; Configurable sandbox
Check status
* https://developer.microsoft.com/en-us/microsoft-365/profile

### Start setup
* https://admin.microsoft.com
&gt; Left Navigation Bar &gt; Settings &gt; Domains &gt; Start Setup

### Download Microsoft Azure Active Directory Connect 
* https://www.microsoft.com/en-us/download/details.aspx?id=47594
&gt; Install on DC using "Express Settings"

## Licenses
If you get an error message of the type "you are not eligible enough", you should add street address and zip code to your profile.

### Microsoft Defender for Endpoint P2 licence
* https://signup.microsoft.com/create-account/signup?products=7f379fee-c4f9-4278-b0a1-e4c8c2fcdf7e

### Microsoft Intune licence
* https://signup.microsoft.com/get-started/signup?products=40BE278A-DFD1-470a-9EF7-9F2596EA7FF9&ali=1

### Microsoft Enterprise Mobility + Security E5 licence 
* https://signup.microsoft.com/get-started/signup?products=87dd2714-d452-48a0-a809-d2f58c4f68b7

### Microsoft 365 E5 licence
* https://admin.microsoft.com/#/catalog/offer-details/microsoft-365-e5/821CC756-0253-4002-9776-A59D87E10383

### Microsoft Teams license
* https://www.microsoft.com/en-us/microsoft-365/microsoft-365-business-standard-one-month-trial

### Office E5 licence
* https://www.microsoft.com/de-de/microsoft-365/enterprise/office-365-e5

### Check current licenses
* https://portal.azure.com/#blade/Microsoft_AAD_IAM/LicensesMenuBlade/Products

### Assign licence to user
If a problem occurs with the assignment on one portal, simply try again on the other portal
* https://admin.microsoft.com/AdminPortal/Home?#/users
&gt; Choose user &gt; Licenses &gt; Assign &gt; Select License &gt; Save
* https://endpoint.microsoft.com/#view/Microsoft_AAD_UsersAndTenants/UserManagementMenuBlade/~/AllUsers
&gt; Choos user &gt; Licenses and Apps &gt; Choose License &gt; Save

### Download Setup Files and install ATP sensor on DC
* https://security.microsoft.com/settings/identities
&gt; Add sensor &gt; Download installer (copy access key) &gt; Run on DC (using access key)
If an error occurs
* https://techcommunity.microsoft.com/t5/microsoft-defender-for-identity/error-installing-atp-sensor-on-dc-2019-gives-an-0x800070643/m-p/3070769
```
Run as SYSTEM:
.\psexec.exe -i -s 'C:\Users\Administrator\Desktop\Azure ATP Sensor Setup\Azure ATP Sensor Setup.exe' NetFrameworkCommandLineArguments="/q" AccessKey="&lt;key&gt;"
```

### Connect Microsoft Intune und Microsoft Defender for Endpoint
* https://security.microsoft.com/securitysettings/endpoints/integration
&gt; Enable wanted features (especially Microsoft Intune connection) &gt; Save preferences
* https://endpoint.microsoft.com/#view/Microsoft_Intune_Workflows/SecurityManagementMenu/~/atp
&gt; Enable: Connect Windows devices to Microsoft Defender for Endpoint &gt; Save

### Join Windows10 to Intune
Windows 10 &gt; Settings (start as administrator) &gt; Accounts &gt; Access Work or school &gt; Enroll only in device management &gt; Login using normal user from on prem domain
List devices (may need some minutes)
* https://endpoint.microsoft.com/#view/Microsoft_Intune_DeviceSettings/DevicesMenu/~/mDMDevicesPreview

### Onboard Windows10 to Microsoft Defender for Endpoint
* https://security.microsoft.com/securitysettings/endpoints/onboarding
&gt; Download onboarding package &gt; Copy to client and execute as admin
List devices (may need some minutes)
* https://security.microsoft.com/machines?category=endpoints

### Microsoft Defender for Identity
* https://portal.atp.azure.com/tenantPortal
&gt; Learning period on (create more false positive alerts)

### Expiry date of the trials
* https://admin.microsoft.com/Adminportal/Home#/subscriptions


