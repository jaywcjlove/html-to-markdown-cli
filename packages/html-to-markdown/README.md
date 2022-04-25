`@wcj/html-to-markdown`
===

HTML conversion tool to markdown. command line tool => [`@wcj/html-to-markdown-cli`](https://npmjs.com/@wcj/html-to-markdown-cli).

## Installation

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c): Node 14+ is needed to use it and it must be import instead of require.

```bash
npm i @wcj/html-to-markdown
```

Command line tool

```shell
$ npx @wcj/html-to-markdown-cli ./html/index.html
# => # Markdown String
$ npx @wcj/html-to-markdown-cli https://jaywcjlove.github.io/idoc/
# => # Markdown String

# Or

$ sudo npm i @wcj/html-to-markdown-cli -g
$ html-to-markdown ./html/index.html
# => # Markdown String
$ html-to-markdown https://jaywcjlove.github.io/idoc/
# => # Markdown String
```

## Usage

```js
import htmlToMarkdown from '@wcj/html-to-markdown';

htmlToMarkdown({ html: '<h1>Markdown String</h1>' });
// => # Markdown String
```

## API

```ts
import { Options as RehypeParseOptions } from 'rehype-parse';
declare type Options = {
  html?: string;
  url?: string;
  rehypeParseOption?: RehypeParseOptions;
};
export default function htmlToMarkdown(options?: Options): Promise<string>;
```

## Development

```bash
$ npm i
$ npm install --workspaces
$ npm run build
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/jaywcjlove/html-to-markdown-cli/graphs/contributors">
  <img src="https://jaywcjlove.github.io/html-to-markdown-cli/CONTRIBUTORS.svg" />
</a>

Made with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the [MIT License](https://opensource.org/licenses/MIT).