# git

Delete all untracked files.

```bash
git clean -n # check
git clean -f # confirm delete
```

## Delete all local branches aside from `main`, `A`, and `B` branches

```console
> git branch | grep -vE 'main|A|B' | xargs git branch -D
```

## Point `A` branch to `origin/main` from `B` branch

Current:

`A -> B -> origin/main`

New:

`A -> origin/main`

`B -> origin/main`

Commands:

```console
git checkout A
git rebase --onto origin/main B
```

## Amend a specific commit

```bash
git log --oneline
git rebase -i HEAD~n
```

```bash
edit 1234567 commit message A
```

Save and then close -- `:x`. The `rebase` will stop at the commit you marked
`edit`, then do the amending.

```bash
git commit --amend
```

After making the changes.

```bash
git rebase --continue
```

Finally, push your changes to the remote repository.

```bash
git push origin [branch] --force
```

## Undo a local `git rebase` action

```bash
git reflog
# find the appropriate hash and number to reset to
git reset --hard HEAD@{N}
# replace `N` with that number from the reflog hash
```

## add

Selectively add a change to staging.

```console
git add -p
```

## branch

Set a local branch to track a remote branch.

```bash
git branch --set-upstream-to=origin/remote_branch local_branch
```

Deleted a remote main branch, then sync the new local main branch.

```bash
git branch -m <backup> main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
```

Delete all local branch(es) except the `main` branch.

```bash
git branch | grep -v 'main' | xargs git branch -D
```

## cat-file

Print the contents of a commit using its `<hash>`.

```bash
git cat-file -p <hash>
```

## clean

```bash
git clean -n
```

Display all of the file(s) to be removed from the working tree.

```bash
git clean -f
```

Remove all of the regular untracked file(s) from the working tree.

## checkout

```bash
git switch -c <commit_hash>
```

Create a new branch from a detached head with a `<commit_hash>`.

```bash
git checkout <commit_hash>
```

Checkout a certain commit from history. `NOTE:` This will create a detached
head, and will recommend to create a new branch.

## config

Set the `global` default branch.

```bash
git config --global init.defaultBranch branch-name
```

```bash
git config --list --local
```

List the git configuration of a local repository.

```bash
git config --list
```

List the global git configuration of a user.

## switch

```bash
git switch -c <branch> <remote>/<branch>
```

Switch to a remote branch and track it locally.

```bash
git switch -
```

Switch the active branch to the previously active branch.

## stash

```bash
git stash --include-untracked
```

Or,

```bash
git stash -u
```

Undo and stash away the changes to tracked and untracked files.

```bash
git stash list
```

Display a list of all the stashed changes.

```bash
git stash push -m "description"
```

Create a new stash with a good description.

```bash
git stash push <directory | file> --keep-index
```

Undo and stash away the changes made to a directory/file.

```bash
git stash clear
```

## fetch

Delete all the changes made and stashed away.

```bash
git fetch <remote> --prune
```

Download all of the commits from `<remote>`, excluding deleted remote branch.

## reset

Delete the last commit but keep the changes in the working directory.

```bash
git reset --soft HEAD^
```

Delete a certain number of commits from the top and then push it to the remote
repo.

```bash
git reset --hard HEAD~<number_of_commits>
git push <remote> <branch> --force
```

Align the local branch with `remote/branch` and remove all dangling changes.

```bash
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

Create a new tag on the latest commit.

```console
git tag <name>
```

Rename an `<old>` tag to a `<new>` tag.

```console
git tag <new> <old>
git tag -d <old>
git push origin <new> :<old>
```
