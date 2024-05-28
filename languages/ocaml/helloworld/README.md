# Learning Ocaml

First time learning Ocaml.

## Setup

I install Ocaml following the instructions [here](https://ocaml.org/install).

Then I get started with tooling [here](https://ocaml.org/docs/up-and-running#get-up-and-running-with-ocaml). 

## Tools

- **opam** is the package manager for Ocaml. It can be installed with `brew install opam`.
- **utop** is a REPL for Ocaml. It can be installed with `opam install utop`. A simpler version is the basic `ocaml` REPL.
- **dune** is a build system for Ocaml. It can be installed with `opam install dune`.

## Hello World

- dune can init a helloworld project with `dune init project helloworld`.
- cd into the helloworld directory and run `dune build` to build the project.
- run `dune exec ./helloworld.exe` to run the executable.
- create the config file .ocalmformat with `echo "version = `ocamlformat --version`" > .ocamlformat` 
- run `dune fmt -w` to format and watch the code.
- run `dune build @doc` to generate documentation.
- run `open _build/default/_doc/_html/index.html` to open the documentation in the browser.

## First hour with Ocaml

Time to get started with the [first hour with Ocaml](https://ocaml.org/docs/first-hour).

I created a file with the contents [here](./bin/first-hour.ml). I then use the "#use" directive to execute the file in the REPL.

```bash
utop # #use "bin/first-hour.ml";;
```
