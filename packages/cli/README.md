@wcj/html-to-markdown-cli
===

Command line tool for html conversion markdown.

## Quick Start

```bash
$ npx @wcj/html-to-markdown-cli ./html/index.html
$ npx @wcj/html-to-markdown-cli https://jaywcjlove.github.io/idoc/
Or

$ sudo npm i @wcj/html-to-markdown-cli -g
$ html-to-markdown ./html/index.html
$ html-to-markdown https://jaywcjlove.github.io/idoc/
```

## Command Help

```bash
Usage: html-to-markdown <URL|file path> [options] [--help|h] [--version|v]

Options:

  -v, --version, Show version number
  -h, --help, Displays help information.
  -o, --output <dir-path>, Output directory. defalut(dist)

Example:

  html-to-markdown ./html/index.html
  html-to-markdown https://jaywcjlove.github.io/idoc/
  html-to-markdown --output="dist"
```

## License

Licensed under the MIT License.