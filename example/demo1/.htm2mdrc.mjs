import rehypeRewrite, { getCodeString } from 'rehype-rewrite';

/**
 * @typedef {import("rehype-rewrite").RehypeRewriteOptions} RehypeRewriteOptions
 * @type {RehypeRewriteOptions}
 **/

/**
 * @typedef {import("@wcj/html-to-markdown").Options} Options
 * @type {Options}
 **/
export default {
  rehypePlugins: [
    [rehypeRewrite, {
      /**
       * @type {RehypeRewriteOptions["rewrite"]}
       */
      rewrite: (node, index, parent) => {
        if (node.type === "element" && node.tagName === "li") {
          let code = getCodeString(node.children)
          node.children = [
            {
              type: "element",
              tagName: "input",
              properties: {
                type: "checkbox",
                checked: false
              }
            },
            {
              type: "text",
              value: code
            }
          ]
        }
      }
    }]
  ],
  remarkPlugins: []
}