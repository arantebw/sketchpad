# My Apple MacBook Air M4 Setup

## `kitty`

Install the `kitty` terminal.

```bash
curl -L https://sw.kovidgoyal.net/kitty/installer.sh | sh /dev/stdin
```

References:
- https://sw.kovidgoyal.net/kitty/binary/


## `ssh`

Copy the `SSH Config` content from the `Laptop Configs` folder from the Bitwarden account.

## `dotfiles`

Clone and follow the instructions from this [repository](https://github.com/arantebw/dotfiles/tree/main).

## `brew`

Install the `brew` package manager.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

References:
- https://brew.sh/

## `tmux`

Install the `tmux` terminal multiplexer.

```bash
brew install tmux
```

Then follow the `dotfiles` command to create a symbolic link for the configuration.

## Oh My Zsh

Install the `oh-my-zsh` tool to enhance `zsh`.

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
