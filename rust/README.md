# Rust

## cargo (package manager)

Builds a documentation of all the project's dependencies locally and open it in
a browser.

```bash
cargo doc --open
```

Check the version of `cargo` installed.

```bash
cargo --version
```

Create a new project.

```bash
cargo new hello-cargo
```

Build a project, then run it manually.

```bash
# build it
cargo build

# run it
./target/debug/program_name
```

Build a project, then run it automatically, if build is successful.

```bash
cargo run
```

Check if your program still compiles -- i.e. run a new build without creating an exetuble.

```bash
cargo check
```

## rustc (compiler)

Check the version of `rustc` installed.

```bash
rustc --version
```

## rustup (version manager)

Install the `rust-analyzer` LSP for `LazyVim`.

```bash
rustup component add rust-analyzer
```

List all of the available plugins.

```bash
rustup component list
```

Update Rust to a newly released version.

```bash
rustup update
```
