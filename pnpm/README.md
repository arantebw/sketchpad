# pnpm

List all of the globally installed modules. `--depth=0` will exclude listing the
dependencies.

```bash
pnpm list --global --depth=0
```

Download and install dependencies

```bash
pnpm install
```

Install a `<package>` into the target `<workspace>`.

```bash
pnpm install <package> --filter <workspace>
```

Fix a broken `pnpm-lock.yaml` file.

```bash
# First, delete all of the affected node_modules directory of the monorepo.
# Then, re-install all of the dependencies.
$ pnpm install
```

Check the versions used of the project.

```bash
pnpx next info
```

Check the installed version of the `Next` framework.

```bash
pnpx next version
```
