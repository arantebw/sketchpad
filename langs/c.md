# C

`.clang-format` template:

```text
---
BasedOnStyle: LLVM        # Can be LLVM, Google, Mozilla, WebKit, etc.
IndentWidth: 8            # Number of spaces per indentation level
TabWidth: 8               # Width of tab character
UseTab: Never             # Options: Never, ForIndentation, Always
BreakBeforeBraces: Allman # Optional: brace style
---
```

## Commands

Compile a program to a specific standard:

```console
gcc path/file.c -o file -std=<standard>
```

Compile a C program to the ANSI version.

```console
gcc path/file.c -ansi
```

Execute an executable C program.

```console
./a.out
```
