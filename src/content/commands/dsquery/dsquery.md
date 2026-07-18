### Load native module
```
rundll32 dsquery
```

### List users on domain with no limit on results
```
rundll32 dsquery user -limit 0
```

### List groups for given distinguished name
```
rundll32 dsquery group "cn=users, dc=&lt;domainComponent&gt;, dc=&lt;domainComponent&gt;"
```

### List domain admin accounts
```
rundll32 dsquery group -name "&lt;domain admins&gt;" | rundll32 dsget group -members -expand
```

### List all groups for a specific user
```
rundll32 dsquery user -name &lt;user&gt;* | rundll32 dsget user -memberof -expand
```

### List all operating systems on domain
```
rundll32 dsquery * "DC=&lt;domainComponent&gt;,DC=&lt;domainComponent&gt;" -scope subtree -attr "en" "operatingSystem" "operatingSystemServicePack" -filter "(&(objectclass=computer) (objectcategory=computer) (operatingSystem=Windows*))"
```

### Find servers in the domain
```
rundll32 dsquery * domainroot -filter "(&(objectCategory=Computer) (objectClass=Computer) (operatingSystem=*Server*))" -limit 0
```


