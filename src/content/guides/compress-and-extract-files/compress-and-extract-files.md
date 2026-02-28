# Compress And Extract Files

### Create `.tar.gz` archive
```
tar -czf backup.tar.gz my-folder/
```

### Extract `.tar.gz`
```
tar -xzf backup.tar.gz
```

### List archive contents
```
tar -tzf backup.tar.gz
```

### Create `.zip` archive
```
zip -r backup.zip my-folder/
```

### Extract `.zip`
```
unzip backup.zip
```

### Quick reference
- `tar -czf` to create, `tar -xzf` to extract.
- Use `-r` with `zip` for directories.
