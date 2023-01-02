# git

```
git stash push <directory | file> --keep-index
```
Undo and stash away the changes made to a directory/file.

```
git stash clear
```
Delete all the changes made and stashed away.

```
git fetch <remote> --prune
```
Download all of the commits from `<remote>`, excluding deleted remote branch.

```
git reset --hard remote/branch
```
Align the local branch with `remote/branch` and remote all dangling changes.
