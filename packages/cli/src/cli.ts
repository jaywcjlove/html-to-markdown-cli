#!/usr/bin/env node
import path from 'path';
import { fileURLToPath } from 'url';
import minimist from 'minimist';
import fs from 'fs-extra';
import fetch from 'node-fetch';
import htm2md from '@wcj/html-to-markdown';

export const isAbsoluteURL = (str: string) => /^[a-z][a-z0-9+.-]*:/.test(str);

function outputHelp() {
  console.log(' Usage: html-to-markdown <URL|file path> [options] [--help|h] [--version|v]');
  console.log('\n Options:');
  console.log('');
  console.log('   -v, --version,', 'Show version number');
  console.log('   -h, --help,', 'Displays help information.');
  console.log('   -o, --output <dir-path>,', 'Output directory. defalut(dist)');
  console.log('');
  console.log(' Example:');
  console.log('');
  console.log('   \x1b[35mhtml-to-markdown\x1b[0m ./html/index.html');
  console.log('   \x1b[35mhtml-to-markdown\x1b[0m https://jaywcjlove.github.io/idoc/');
  console.log('   \x1b[35mhtml-to-markdown\x1b[0m \x1b[33m--output\x1b[0m="dist"');
  console.log('');
  console.log('');
}

const argvs = minimist(process.argv.slice(2));
if (argvs.h || argvs.help) {
  outputHelp();
  process.exit(0);
}
const logNot =`
Please specify a URL or file path.
Example:  \x1b[35mhtml-to-markdown\x1b[0m \x1b[33m./html/index.html\x1b[0m
          \x1b[35mhtml-to-markdown\x1b[0m \x1b[33mhttps://github.com/jaywcjlove/html-to-markdown-cli\x1b[0m
`

;(async () => {
  try {
    if (argvs.v || argvs.version) {
      const pkgpath = fileURLToPath(new URL('../package.json', import.meta.url));
      const { version } = await fs.readJSON(pkgpath);
      console.log(` \x1b[35mhtml-to-markdown\x1b[0m v${version}\n`);
      process.exit(0);
    }
    let filePath = argvs._[0];
    if (!filePath) {
      throw new Error(logNot)
    }

    argvs.output = argvs.o = path.resolve(argvs.output || argvs.o || 'dist');
    const output = path.resolve(argvs.output, path.basename(filePath) + '.md');
    let htmlStr = '';
    if (!isAbsoluteURL(filePath)) {
      filePath = path.resolve(filePath);
      if (!isAbsoluteURL(filePath) && !fs.existsSync(filePath)) {
        throw new Error(`File \x1b[31;1m${filePath}\x1b[0m does not exist!`)
      }
      htmlStr = (await fs.readFile(filePath)).toString();
      console.log(`  📄 Read File: \x1b[34;1m${filePath}\x1b[0m`);
    } else {
      const response = await fetch(filePath);
      htmlStr = await response.text();
      console.log(`  🌐 Request: \x1b[34;1m${filePath}\x1b[0m`);
    }
    const mdStr = await htm2md({ html: htmlStr });
    await fs.ensureDir(argvs.output);
    await fs.writeFile(output, mdStr);
    console.log(` \x1b[34;1m 🎉 Compliled successfully!\x1b[0m`);
    console.log(`  ╰┈ Output: \x1b[32;1m${output}\x1b[0m\n`);
  } catch (error) {
    // if (error instanceof Error) {
    //   console.log(` \x1b[31mhtml-to-markdown:\x1b[0m \x1b[31m${error.name} ${error.message}\x1b[0m`);
    // }
    console.log(` \x1b[31mhtml-to-markdown:\x1b[0m`, error);
    process.exit(1);
  }
})();
