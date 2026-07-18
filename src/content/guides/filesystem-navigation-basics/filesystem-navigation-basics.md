# Filesystem Navigation Basics

### Know where you are
```
pwd
```

### List files and folders
```
ls
ls -la
```

### Move between folders
```
cd /etc
cd ~
cd ..
cd -
```

### Show folder tree quickly
```
find . -maxdepth 2 -type d
```

### Use absolute vs relative paths
```
cd /var/log        # absolute path
cd ../tmp          # relative path
```

### Quick reference
- `~` means your home directory.
- `..` means parent directory.
