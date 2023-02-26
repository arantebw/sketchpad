# git

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
git switch -
```

Switch the active branch to the previously active branch.

## stash

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

```
git reset --hard remote/branch
```

Align the local branch with `remote/branch` and remote all dangling changes.
