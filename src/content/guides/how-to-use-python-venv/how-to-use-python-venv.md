# How To Use Python Venv

### Install Python and venv support
```
sudo apt update
sudo apt install -y python3 python3-venv python3-pip
python3 --version
```

### Create virtual environment
```
mkdir -p ~/projects/myapp
cd ~/projects/myapp
python3 -m venv .venv
```

### Activate environment
```
source .venv/bin/activate
```

### Install dependencies
```
pip install --upgrade pip
pip install requests flask
pip list
```

### Freeze dependencies
```
pip freeze > requirements.txt
cat requirements.txt
```

### Recreate env from requirements
```
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### Deactivate environment
```
deactivate
```

### Remove virtual environment
```
rm -rf .venv
```

### Quick reference
- Keep one venv per project.
- Never commit `.venv/` to git.
- Pin dependencies with `requirements.txt`.
