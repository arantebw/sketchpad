# smartctl

Assess the current state of a mounted drive.

```console
sudo smartctl -a /dev/<device_identifier>
```

For NVMe drives:

```console
sudo smartctl -a /dev/nvme0n1
```

For SATA drives:

```console
sudo smartctl -a /dev/sda
```
