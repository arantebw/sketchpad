# pnpm

## install

```
pnpm install
```

Download and install dependencies

```
pnpm install <package> --filter <workspace>
```

Install a `<package>` into the target `<workspace>`.

## broken pnpm-lock.yaml file

```bash
# First, delete all of the affected node_modules directory of the monorepo.
# Then, re-install all of the dependencies.
$ pnpm install
```
