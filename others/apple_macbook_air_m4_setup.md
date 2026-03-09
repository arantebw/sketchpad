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

Then follow the `dotfiles` command to create a symbolic link for the configuration.

## `neovim`

Install the `neovim` CLI-based text editor.

```bash
brew install neovim
```

Configure the `LazyVim` settings by cloning this repository `https://github.com/arantebw/nvim` to the `~/.config/` directory.

## `nvm`

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
```

References:
- [Installing and Updating](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

## `uv`

Install the `uv` Python package manager.

```bash
brew install uv
```
