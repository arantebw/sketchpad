# shell

## lsof (list of files)

```
lsof -i :<port_number>
```

List the process currently running and using the `<port_number>`.

## hostname

```
hostname -I
```

Returns the IP address of the host machine.

```
hostname
```

Returns the computer name of the host machine.

## find

```
find . -name <dir_name> -type d
```

Find `<dir_name>` directory in the `.` path.
