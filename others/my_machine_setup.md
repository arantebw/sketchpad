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

## Clone the `dotfiles` repo.

## Install and setup `zsh`.

```console
sudo dnf install zsh -y
```

```console
chsh -s $(which zsh)
```

> [!IMPORTANT]
> Log out of your current session for changes to take effect.

```console
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

```console
ln -s ~/dotfiles/robbyrussell-custom.zsh-theme ~/.oh-my-zsh/themes/robbyrussell-custom.zsh-theme
```

```console
curl https://pyenv.run | bash
```

## Install `unclutter`, then update `dotfiles/i3`.

```console
sudo dnf install unclutter
```

```text
exec --no-startup-id unclutter -idle 3 -root
```

> [!WARNING]
> Compatible to `X11` window systems only.

## Install `nvm` (Node Version Manager).

- [Instructions](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

```console
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

## Download and install the `FiraCode Nerd Font`.

- [Download Page](https://www.nerdfonts.com/font-downloads)

## Install the `Brave` web browser.

- [Reference](https://brave.com/linux/#fedora-41-dnf5)

```console
sudo dnf install dnf-plugins-core
```

```console
sudo dnf config-manager addrepo --from-repofile=https://brave-browser-rpm-release.s3.brave.com/brave-browser.repo
```

```console
sudo dnf install brave-browser
```

- Create the profiles
- Update the sync codes
