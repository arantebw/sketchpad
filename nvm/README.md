# nvm

## alias

Set the default version.

```bash
nvm alias default <version>
# e.g.
nvm alias default 18
```

```
nvm ls
```
List all of the available local versions of Node/NPM.

```
nvm ls-remote
```
List all of the available remote versions of Node/NPM.

```
nvm use <alias>
```
Activate a specific version of Node/NPM using an `<alias>` in the current shell.

```
nvm install <version>
```
Downloads and installs a specific Node/NPM `<version>`.

```
nvm current
```
Check the current version of Node/NPM being used.
