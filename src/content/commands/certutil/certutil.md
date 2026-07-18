### Download file
```
certutil -urlcache -split -f http://&lt;rhost&gt;/&lt;file&gt;
```

### Decode base64 file
```
certutil -decode &lt;base64File&gt; &lt;decodedFile&gt;
```

### Get CA host
```
certutil -TCAInfo
```


