import htmlToMarkdown from '../index.js';

it('htmlToMarkdown test case basic-syntax', async () => {
  expect(await htmlToMarkdown()).toEqual('');
  const html = `<p>Hello <code>World</code>!</p>`;
  const mdStr = await htmlToMarkdown({ html });
  expect(mdStr).toEqual('Hello `World`!\n')
  expect(await htmlToMarkdown({ html: `<h2>Title 1</h2>` })).toEqual('## Title 1\n');
  expect(await htmlToMarkdown({ html: `<h3>Title 1</h3>` })).toEqual('### Title 1\n');
  expect(await htmlToMarkdown({ html: `<p><em>斜体文本</em></p>` })).toEqual('*斜体文本*\n');
  expect(await htmlToMarkdown({ html: `<p><strong>粗体文本</strong></p>` })).toEqual('**粗体文本**\n');
  expect(await htmlToMarkdown({ html: `<p><em><strong>粗斜体文本</strong></em></p>` })).toEqual('***粗斜体文本***\n');
  expect(await htmlToMarkdown({ html: `<pre class="language-bash"><code class="language-bash code-highlight"><span class="code-line">$ npx idoc init myapp</span></code></pre>` })).toEqual(`\`\`\`bash\n$ npx idoc init myapp\n\`\`\`\n`);
  expect(await htmlToMarkdown({ html: `<html> <body> <h1>我的第一个标题</h1> <p>我的第一个段落。</p> </body> </html>` })).toEqual('# 我的第一个标题\n\n我的第一个段落。\n');
  expect(await htmlToMarkdown({ html: `<p> Hello <!--rehype:ignore:start--> <code>World</code> <!--rehype:ignore:end--> </p>` })).toEqual('Hello <!--rehype:ignore:start-->`World`<!--rehype:ignore:end-->\n');
});

it('htmlToMarkdown test case ignore', async () => {
  expect(await htmlToMarkdown({ html: `<p> Hello <!--rehype:ignore:start--> <code>World</code> <!--rehype:ignore:end--> </p>` })).toEqual('Hello <!--rehype:ignore:start-->`World`<!--rehype:ignore:end-->\n');
});

it('htmlToMarkdown test list', async () => {
  expect(await htmlToMarkdown({ html: `<ul class="contains-task-list"> <li class="task-list-item"><input type="checkbox" checked="" disabled=""> <code>idoc.yml</code> 在根目录下添加</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""> <code>idoc.chapters.yml</code> 左侧栏文件导航</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""> <code>注释配置</code> 在 markdown 文档中添加的配置</li> </ul>` }))
    .toEqual('* `idoc.yml` 在根目录下添加\n* `idoc.chapters.yml` 左侧栏文件导航\n* `注释配置` 在 markdown 文档中添加的配置\n');
});

const tableStr = `<table>
<thead>
<tr>
<th>Repo</th>
<th>Starred</th>
<th>Website</th>
</tr>
</thead>
<tbody>
<tr>
<td>MySQL Tutorial</td>
<td>1</td>
<td>2</td>
</tr>
<tr>
<td>Docker Tutorial</td>
<td>3</td>
<td>4</td>
</tr>
</tbody>
</table>
`;

it('htmlToMarkdown test list', async () => {
  const str = await htmlToMarkdown({ html: tableStr });
  expect(str)
    .toEqual('| Repo            | Starred | Website |\n| --------------- | ------- | ------- |\n| MySQL Tutorial  | 1       | 2       |\n| Docker Tutorial | 3       | 4       |\n');
});
