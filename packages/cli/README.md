`@wcj/html-to-markdown-cli`
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![CI](https://github.com/jaywcjlove/html-to-markdown-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/jaywcjlove/html-to-markdown-cli/actions/workflows/ci.yml)
[![NPM @wcj/html-to-markdown version](https://img.shields.io/npm/v/@wcj/html-to-markdown.svg?style=flat)](https://npmjs.org/package/@wcj/html-to-markdown)
[![NPM @wcj/html-to-markdown-cli version](https://img.shields.io/npm/v/@wcj/html-to-markdown-cli.svg?style=flat&label=@wcj/html-to-markdown-cli)](https://npmjs.org/package/@wcj/html-to-markdown-cli)

Command line tool for html conversion markdown.

## Quick Start

```shell
$ npx @wcj/html-to-markdown-cli ./html/index.html
# 🌐 Request: /Users/xxx/index.html
# 🎉 Compliled successfully!
# ╰┈ Output: /Users/xxx/dist/index.md
$ npx @wcj/html-to-markdown-cli https://jaywcjlove.github.io/idoc/
# 🌐 Request: https://jaywcjlove.github.io/idoc/
# 🎉 Compliled successfully!
# ╰┈ Output: /Users/xxx/dist/idoc.md
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
Usage: html-to-markdown <URL|file path|-> [options] [--help|h] [--version|v]

Passing "-" as the first arg will take input from STDIN

Options:

  -v, --version, Show version number
  -h, --help, Displays help information.
  -o, --output <dir-path>, Output directory. defalut(dist)
  -s, --stdout, Output to stdout

Example:

  html-to-markdown ./html/index.html
  html-to-markdown https://jaywcjlove.github.io/idoc/
  html-to-markdown --output="dist"
  echo "<h1>hello world</h1>"| html-to-markdown - --stdout
```

## Support Config

In the project's root directory, add a `.htm2mdrc.js` file with the following configuration to enable the [rehype](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins) and [remark](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins) plugins.

```js
/**
 * @typedef {import("@wcj/html-to-markdown").Options} Options
 * @type {Options}
 **/
export default { 
  rehypeParseOption: {},
  rehypePlugins: [],
  remarkPlugins: [],
};
```

The configuration is supported by [auto-config-loader](https://github.com/jaywcjlove/auto-config-loader) and it supports configurations in formats of `.htm2mdrc.js`, `.htm2mdrc.mjs`, `.htm2mdrc.cjs`, and `.htm2mdrc.ts`.

## License

Licensed under the MIT License.