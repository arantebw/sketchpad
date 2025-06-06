# My Machine Setup

## Install the `kitty` terminal.

```console
sudo dnf install kitty
```

## Install `ssh`, otherwise set it up with `dotfiles`.

## Install `git`, then setup the accounts default identity.

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
