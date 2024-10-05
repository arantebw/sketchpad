# find

Find all files and folders, then delete them except the `.git` directory.

```bash
find . -mindepth 1 ! -regex '^./\.git\(/.*\)?' -delete
```

Find a specific directory using it's name.

```bash
find . -name 'folder-name' -type d
```
