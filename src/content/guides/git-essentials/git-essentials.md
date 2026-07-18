# Git Essentials

### Global setup
```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
git config --global pull.rebase true
git config --global core.editor "vim"
```

### Start a repository
```
git init
git add .
git commit -m "chore: initial commit"
git branch -M main
git remote add origin <repo-url>
git push -u origin main
```

### Daily workflow
```
git checkout -b feature/login-hardening
git status
git add -p
git commit -m "feat(auth): add login rate limiting"
git fetch origin
git rebase origin/main
git push -u origin feature/login-hardening
```

### Keep history clean
```
git rebase -i HEAD~5
git commit --amend
git push --force-with-lease
```

### Inspect changes
```
git log --oneline --graph --decorate -n 20
git diff
git diff --staged
git show <commit>
```

### Undo safely
```
git restore <file>
git restore --staged <file>
git revert <commit>
git reset --soft HEAD~1
```

### Stash and recover work
```
git stash push -m "wip: hotfix interrupt"
git stash list
git stash pop
```

### Cherry-pick useful commits
```
git cherry-pick <commit-hash>
```

### Tags and releases
```
git tag -a v1.2.0 -m "Release v1.2.0"
git push origin v1.2.0
```

### Quick reference
- Commit small, reviewable units.
- Rebase local branches before opening PR.
- Use `--force-with-lease`, not `--force`.
- Prefer `revert` for shared branch rollback.
