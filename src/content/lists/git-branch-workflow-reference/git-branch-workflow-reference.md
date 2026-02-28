Step | Command | Purpose
--- | --- | ---
Create branch | `git checkout -b feature/login` | Start new work
List branches | `git branch -a` | See local/remote branches
Switch branch | `git checkout main` | Move to target branch
Sync main | `git fetch origin && git pull` | Update base branch
Rebase feature | `git rebase origin/main` | Keep linear history
Resolve conflicts | Edit files + `git add .` + `git rebase --continue` | Complete rebase
Push feature | `git push -u origin feature/login` | Publish branch
Update remote branch after rebase | `git push --force-with-lease` | Safe force update
Merge pull-request branch | `git merge --no-ff feature/login` | Preserve branch context
Delete local branch | `git branch -d feature/login` | Cleanup
Delete remote branch | `git push origin --delete feature/login` | Cleanup remote
