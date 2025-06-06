# My Machine Setup

## Install the `kitty` terminal.

```console
sudo dnf install kitty
```

## Install `nvim`.

```console
sudo dnf install nvim
```

## Install `ssh`, otherwise set it up with `dotfiles`.

```console
sudo dnf install ssh
```

```console
mkdir -v .ssh
```

At first, copy the content of `dotfiles/ssh/config` to `~/.ssh/config`. Then, after cloning the `dotfiles` repo into your machine, delete the `~/.ssh/config` file and create the symlink below:

```console
ln -s ~/dotfiles/ssh/config ~/.ssh/config
```

> [!IMPORTANT]
> Do not forget to generate the appropriate SSH keys of each accounts.

## Install `git`, then setup the accounts default identity.

```console
sudo dnf install git
```

```text
Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'arantebw@gallardo-m2.(none)')
```

## Install and setup `zsh`.

- [Instructions](https://chatgpt.com/share/683aeab4-a2b4-8008-8b9b-f8f425d43cea)

## Install `unclutter`, then update `dotfiles/i3`.

```console
sudo dnf install unclutter
```

```text
exec --no-startup-id unclutter -idle 3 -root
```

## Install `nvm` (Node Version Manager).

- [Instructions](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
