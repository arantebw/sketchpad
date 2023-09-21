# pnpm

## install

Download and install dependencies

```bash
pnpm install
```

Install a `<package>` into the target `<workspace>`.

```bash
pnpm install <package> --filter <workspace>
```

## broken pnpm-lock.yaml file

```bash
# First, delete all of the affected node_modules directory of the monorepo.
# Then, re-install all of the dependencies.
$ pnpm install
```

## pnpx

### next

Check the versions used of the project.

```bash
pnpx next info
```

Check the Next.js version.

```bash
pnpx next version
```
