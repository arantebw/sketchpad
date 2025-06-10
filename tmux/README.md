# tmux

## kill-server

It kills the current tmux server.

```console
tmux kill-server
```

## move-window

Move the `<window_index>` window to `<session_name>` session.

```console
tmux move-window -s <session_name>:<window_index>
```

## swap-window

```bash
tmux swap-window -t <target>
```

Swaps the current active window and the `<target>` window.

## Buffer Commands

Install `tmux` plugins, then reload the environment.

```text
Ctrl + b, Shift + i
```

Switch to a specific and open window. `#` is the number assigned to an open window.

```text
C-b + #
```

Rename an active window.

```text
C-b + ,
```

Splits the current pane horizontally. This keybinding is a remap of the
original `C-b + "` keybinding.

```text
C-b + -
```

Splits the current pane vertically. This keybinding is a remap of the original
`C-b + %` keybinding.

```text
C-b + |
```

Restore persisted sessions after reboot.

```text
C-b + C-r
```

Save current state of a session for persistence after reboot.

```text
C-b + C-s
```

Display or switch (attach) from a list of active sessions.

```text
C-b + s
```

Display or switch from a list of active panes (windows) of sessions.

```text
C-b + w
```
