import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import readingTime from "reading-time";

function calculateReadingTime(content: string) {
  const contentWithoutSvg = content.replace(/<svg+.+?(?=<\/svg>)<\/svg>/, "");
  return readingTime(contentWithoutSvg).text;
}

const posts = defineCollection({
  name: "Post",
  directory: "src/posts",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string().min(1),
    createdAt: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    image: z.string().url().optional(),
    summary: z.string().min(1).optional(),
    slug: z.string().min(1),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypePrism],
    });
    return {
      ...document,
      mdx,
      readingTime: calculateReadingTime(document.content),
    };
  },
});

export default defineConfig({
  collections: [posts],
});
