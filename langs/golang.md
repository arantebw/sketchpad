# golang

Started learning and using the Go programming language in October 2022.

### module
- Is a collection of packages.

### module path
- The code's repo URI.

```
$ go mod init example.com/greetings
```
- Used for dependency tracking.

### exported name
- Function names that starts with a capital letter.
- It can be called by other function not in the same package.

### := operator
- Shorthand for declaring and assigning a variable.
- It uses *type inference*, to assign the data type to the variable

### main package
- Code to be executed as an application.

```
$ go mod edit -replace example.com/greetings=../greetings
```
- Point to the local directoy of the `example.com/greetings` package.

```
$ go mod tidy
```
- Synchronize the module dependencies.

```
$ go run .
```
- Executes your code together with the packages.

```
$ go build
```
- Compiles the packages, together with dependencies, but it doesn't install the
  results (binary).

```
$ go install
```
- Compiles and installs the dependencies.

### go slice
- It's like an array but more dynamic.

### exported vs non-exported functions

- Exported function's name starts with a uppercase letter.
- Non-exported function'name starts with a lowercase letter.

### backward compatibility

- Preserve an old functionality, feature, API, etc..
- Once a module is published, consider those consumers of the module because.
- Any abrupt changes will have a huge chance of breaking their programs.

```
make(map[key-type]value-type)
```
- Initializing a *go map* data type.

```
$ go list -f '{{.Target}}'
```
- Check the current install path of go programs.

```
$ go env -w GOBIN=/home/$USER/go/bin
```
- Alternative way of setting the *go path*.
- This will change the install path returned by the previous command.

### go function
- It can return any number of results.
- *naked return*
