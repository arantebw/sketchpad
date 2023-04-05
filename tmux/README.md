# tmux

## swap-window

```bash
tmux swap-window -t <target>
```
Swaps the current active window and the `<target>` window.

## buffer commands

```
C-b + -
```

Splits the current pane horizontally. This keybinding is a remap of the
original `C-b + "` keybinding.

```
C-b + |
```

Splits the current pane vertically. This keybinding is a remap of the original
`C-b + %` keybinding.

```
C-b + C-r
```
Restore persisted sessions after reboot.


```
C-b + C-s
```
Save current state of a session for persistence after reboot.

```
C-b + s
```
Display or switch (attach) from a list of active sessions.

```
C-b + w
```
Display or switch from a list of active panes (windows) of sessions.
