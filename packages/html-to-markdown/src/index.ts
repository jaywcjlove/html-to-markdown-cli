import { unified, PluggableList } from 'unified';
import rehypeParse, { Options as RehypeParseOptions} from 'rehype-parse';
import rehypeRemark from 'rehype-remark';
import remarkStringify from 'remark-stringify';
import rehypeIgnore from 'rehype-ignore';
import rehypeFormat from 'rehype-format';
import remarkGfm from 'remark-gfm';
import rehypeVideo from 'rehype-video';

type Options = {
  html?: string
  url?: string
  rehypeParseOption?: RehypeParseOptions;
  /**
   * List of [remark plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins) to use.
   * See the next section for examples on how to pass options
   */
  remarkPlugins?: PluggableList;
  /**
   * List of [rehype plugins](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins) to use.
   * See the next section for examples on how to pass options
   */
  rehypePlugins?: PluggableList;
}

export default async function htmlToMarkdown(options: Options = {}) {
  const { rehypeParseOption, remarkPlugins = [], rehypePlugins = [] } = options;
  const file = await unified()
    .use(rehypeParse, { fragment: true, ...rehypeParseOption })
    .use(rehypeRemark)
    .use(rehypeIgnore)
    .use(remarkGfm)
    .use(rehypeVideo)
    .use(rehypeFormat)
    .use(remarkPlugins || [])
    .use(rehypePlugins || [])
    .use(remarkStringify)
    .processSync(options.html)
  return String(file);
}