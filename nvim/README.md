# nvim

Reloads the currently open Lua file.

```text
:luafile %
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
