import { unified } from 'unified';
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
}

export default async function htmlToMarkdown(options: Options = {}) {
  const { rehypeParseOption } = options;
  const file = await unified()
    .use(rehypeParse, { fragment: true, ...rehypeParseOption })
    .use(rehypeRemark)
    .use(remarkGfm)
    .use(rehypeVideo)
    .use(rehypeIgnore)
    .use(rehypeFormat)
    .use(remarkStringify)
    .processSync(options.html)
  return String(file);
}