# pactl

Set the default audio output device.

```console
➜ pactl set-default-sink alsa_output.usb-1130_USB_AUDIO-00.analog-stereo
```

List all of the available audio output devices.

```console
➜ pactl list sinks short
52      alsa_output.usb-V_NO_NO_NONE_Fantech_Leviosa-00.analog-stereo   PipeWire        s16le 2ch 48000Hz       SUSPENDED
58      alsa_output.usb-1130_USB_AUDIO-00.analog-stereo PipeWire        s16le 2ch 48000Hz       SUSPENDED
59      alsa_output.pci-0000_00_1f.3.analog-stereo      PipeWire        s32le 2ch 48000Hz       SUSPENDED
```
