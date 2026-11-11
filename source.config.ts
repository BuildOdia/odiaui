import { defineDocs, defineConfig } from "fumadocs-mdx/config"
import { siteUrl } from "./lib/site"

type MdxNode = {
  value?: unknown
  children?: MdxNode[]
}

/**
 * Replaces `__SITE_URL__` in MDX (including code blocks) with the deployed
 * site URL, so installation commands stay correct on custom domains.
 */
function remarkSiteUrl() {
  return (tree: MdxNode) => {
    const walk = (node: MdxNode) => {
      if (typeof node.value === "string") {
        node.value = node.value.replaceAll("__SITE_URL__", siteUrl)
      }
      node.children?.forEach(walk)
    }

    walk(tree)
  }
}

export const docs = defineDocs({
  dir: "content/docs",
})

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkSiteUrl],
  },
})
