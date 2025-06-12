# My Machine Setup

## Install the latest version of `Fedora Linux (Workstation Edition)`.

## Install the `kitty` terminal.

```console
sudo dnf install kitty
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

## Install `nvim` and `LazyVim`.

```console
sudo dnf install nvim
```

```console
git clone https://github.com/arantebw/nvim ~/.config/nvim
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

```console
ln -s ~/dotfiles/gitconfig ~/.gitconfig
```

```console
sudo dnf install diff-so-fancy
```

```console
sudo npm install -g devmoji
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

## Install `Slack`, `Postman`, and `Spotify`.

- Install it via the `Software` app using `flatpak` on Fedora.

## Install `Visual Studio Code`.

- [Reference](https://code.visualstudio.com/docs/setup/linux#_rhel-fedora-and-centos-based-distributions)
- Sign in using GitHub account.

## Install the `Cursor AI Editor`.

- [Reference](https://chatgpt.com/share/68450e1f-d874-8008-946c-ea20ee10452d)
- Import the Visual Studio Code settings.

## Install `Vitals` from GNOME Shell Extensions.

- [Reference](https://extensions.gnome.org/extension/1460/vitals/)
