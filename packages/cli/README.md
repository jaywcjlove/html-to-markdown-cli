`@wcj/html-to-markdown-cli`
===

[![CI](https://github.com/jaywcjlove/html-to-markdown-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/jaywcjlove/html-to-markdown-cli/actions/workflows/ci.yml)
[![NPM @wcj/html-to-markdown version](https://img.shields.io/npm/v/@wcj/html-to-markdown.svg?style=flat)](https://npmjs.org/package/@wcj/html-to-markdown)
[![NPM @wcj/html-to-markdown-cli version](https://img.shields.io/npm/v/@wcj/html-to-markdown-cli.svg?style=flat&label=@wcj/html-to-markdown-cli)](https://npmjs.org/package/@wcj/html-to-markdown-cli)

Command line tool for html conversion markdown.

## Quick Start

```shell
$ npx @wcj/html-to-markdown-cli ./html/index.html
# => # Markdown String
$ npx @wcj/html-to-markdown-cli https://jaywcjlove.github.io/idoc/
# => # Markdown String
```

Or

```shell
$ sudo npm i @wcj/html-to-markdown-cli -g
$ html-to-markdown ./html/index.html
# => # Markdown String
$ html-to-markdown https://jaywcjlove.github.io/idoc/
# => # Markdown String
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