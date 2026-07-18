# Install Packages With Apt

### Update package index
```
sudo apt update
```

### Search a package
```
apt search htop
```

### Install a package
```
sudo apt install -y htop
```

### Verify installed package
```
htop --version
dpkg -l | grep htop
```

### Remove a package
```
sudo apt remove -y htop
```

### Clean up unused dependencies
```
sudo apt autoremove -y
sudo apt clean
```

### Quick reference
- Run `apt update` before install.
- Use `autoremove` after package removal.
