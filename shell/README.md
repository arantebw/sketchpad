# shell

Format all of the JavaScript files in the current directory.

```bash
$ prettier --write "**/*.js"
```

Check if `prettierd` is running.

```bash
ps aux | grep prettierd
```

List the process currently running and using the `<port_number>`.

```bash
lsof -i :<port_number>
```

Returns the IP address of the host machine.

```bash
hostname -I
```

Returns the computer name of the host machine.

```
hostname
```

Find `<dir_name>` directory in the `.` path.

```bash
find . -name <dir_name> -type d
```

Find a `"filename"` directory at `<location>` directory.

```bash
$ find <location> -type d -name "filename"
```

