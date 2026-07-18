# How To Install Nodejs

### Install Node.js via NodeSource (Ubuntu)
```
sudo apt update
sudo apt install -y ca-certificates curl gnupg
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

### Verify installation
```
node -v
npm -v
```

### Install `pnpm` globally
```
sudo npm install -g pnpm
pnpm -v
```

### Optional: install build tools for native packages
```
sudo apt install -y build-essential
```

### Create first project
```
mkdir my-node-app && cd my-node-app
npm init -y
npm install express
```

### Run a quick test
```
node -e "console.log('node works')"
```

### Update Node.js later
```
sudo apt update
sudo apt install -y nodejs
```

### Remove Node.js
```
sudo apt remove -y nodejs
sudo apt autoremove -y
```

### Quick reference
- Prefer LTS/current from trusted repo.
- Verify both `node` and `npm` after install.
- Install compiler toolchain for native modules.
