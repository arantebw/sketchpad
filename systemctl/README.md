# systemctl

Restart the `NetworkManager` service.

```console
sudo systemctl restart NetworkManager
```

Shuts down and power-off your machine.

```console
sudo systemctl poweroff
```

Start the `docker-desktop` service.

```console
systemctl --user start docker-desktop &
```

Check the status of a service.

```console
sudo systemctl status <service_name>
```

Restarts a service.

```console
sudo systemctl restart <service_name>
```
