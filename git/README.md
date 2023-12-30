# git

## branch

Set a local branch to track a remote branch.

```bash
git branch --set-upstream-to=origin/remote_branch local_branch
```

Deleted a remote main branch, then sync the new local main branch.

```
git branch -m <backup> main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
```

Delete all local branch(es) except the `main` branch.

```bash
git branch | grep -v 'main' | xargs git branch -D
```

## clean

```
git clean -n
```

Display all of the file(s) to be removed from the working tree.

```
git clean -f
```

Remove all of the regular untracked file(s) from the working tree.

## checkout

```
git switch -c <commit_hash>
```

Create a new branch from a detached head with a `<commit_hash>`.

```
git checkout <commit_hash>
```

Checkout a certain commit from history. `NOTE:` This will create a detached
head, and will recommend to create a new branch.

## switch

```
git switch -c <branch> <remote>/<branch>
```

Switch to a remote branch and track it locally.


```
git switch -
```

Switch the active branch to the previously active branch.

## stash

```
git stash --include-untracked
```

Or,

```
git stash -u
```

Undo and stash away the changes to tracked and untracked files.

```
git stash list
```

Display a list of all the stashed changes.


```
git stash push -m "description"
```

Create a new stash with a good description.

```
git stash push <directory | file> --keep-index
```

Undo and stash away the changes made to a directory/file.

```
git stash clear
```

## fetch

Delete all the changes made and stashed away.

```
git fetch <remote> --prune
```

Download all of the commits from `<remote>`, excluding deleted remote branch.

## reset

Delete a certain number of commits from the top and then push it to the remote
repo.

```bash
git reset --hard HEAD~<number_of_commits>
git push <remote> <branch> --force
```

Align the local branch with `remote/branch` and remove all dangling changes.

```
git reset --hard remote/branch
```

## rm

Stop tracking a file and remove it from the working directory.

```bash
git rm file.name
```

## rebase

Squash a certain number of commits.

```bash
git rebase -i HEAD~<number_of_commits>
```

## tag

Rename an `<old>` tag to a `<new>` tag.

```bash
git tag <new> <old>
git tag -d <old>
git push origin <new> :<old>
```
