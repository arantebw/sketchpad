# nvim

Explore the current directory.

```text
:Ex
```

Display the absolute path of the current file.

```console
:echo expand('%:p')
```

Scroll the current location of the cursor to the top of the screen.

```text
zt
```

Scroll the current location of the cursor to the center of the screen.

```text
zz
```

Scroll the current location of the cursor to the bottom of the screen.

```text
zb
```

Check the currently loaded LSP configuration of an active file.

```text
:LspInfo
```

Reloads the currently open Lua file.

```text
:luafile %
```

## LazyVim Keymaps

Display the hover documentation:

```text
Shift + k
```

## Packer

Opens the available Packer-related options.

```text
:Packer + <TAB>
```

## Mason

Opens the available Mason-related options.

```text
:Mason + <TAB>
```

Opens the Mason modal of available LSPs, DAPs, linters, and formatters.

```text
:Mason
```

## Issues and Resolutions

### `E138: Cannot write ShaDa file` error

- ShaDa (Shared Data)
- is used to store command history, registers, marks, and other session-related
  info

> Solution:  
> Delete the affected (corrupted) ShaDa file, then restart `nvim`.  
> Go to `~/.local/state/nvim/shada/` directory,  
> then delete the file.
