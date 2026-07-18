# Tmux

### Install
```
sudo apt update
sudo apt install -y tmux
tmux -V
```

### Start and manage sessions
```
tmux
tmux new -s dev
tmux ls
tmux attach -t dev
tmux kill-session -t dev
```

### Default prefix
```
Ctrl+b
```

### Window operations
```
Ctrl+b c    # new window
Ctrl+b n    # next window
Ctrl+b p    # previous window
Ctrl+b ,    # rename window
Ctrl+b &    # close window
```

### Pane operations
```
Ctrl+b %    # split vertical
Ctrl+b "    # split horizontal
Ctrl+b o    # switch pane
Ctrl+b x    # close pane
Ctrl+b z    # zoom pane
```

### Resize panes
```
Ctrl+b : resize-pane -L 10
Ctrl+b : resize-pane -R 10
Ctrl+b : resize-pane -U 5
Ctrl+b : resize-pane -D 5
```

### Copy mode and scroll
```
Ctrl+b [
# then use arrow keys / PgUp / PgDn
q
```

### Useful `~/.tmux.conf`
```
set -g mouse on
set -g history-limit 100000
setw -g mode-keys vi
bind r source-file ~/.tmux.conf \; display-message "tmux config reloaded"
set -g status-bg black
set -g status-fg white
```

### Reload config
```
tmux source-file ~/.tmux.conf
```

### Quick reference
- Use named sessions per project.
- Enable mouse and high history limit.
- Keep one pane per long-running process.
- Use copy mode for log navigation.
