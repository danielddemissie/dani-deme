import Link from "next/link";
import type { Metadata } from "next";
import { allPosts } from "content-collections";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import PostDate from "@/components/custom/post-date";
import { Suspense } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) return;

  const { title, summary: description, image } = post;

  return {
    title,
    description,
    openGraph: {
      images: image,
    },
    twitter: {
      card: "summary_large_image",
      images: image,
    },
  };
}

export default async function SinglePost({ params }: PageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) notFound();
  return (
    <>
      <article>
        <header>
          <h1 className="text-2xl font-medium">{post.title}</h1>

          <div className="mb-10 mt-2 flex items-center gap-4 font-mono text-sm text-zinc-500">
            <div>
              <a
                href="https://twitter.com/danieldemeD"
                className="transition-colors hover:text-zinc-200/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                @danideme
              </a>{" "}
              <span className="px-2">|</span>{" "}
              <PostDate dateString={post.createdAt} />{" "}
            </div>

            <Link
              href="/posts"
              className="ml-auto border-b border-dotted text-zinc-200 transition-colors hover:text-zinc-200/80"
            >
              Back
            </Link>
          </div>
        </header>
        <MDXContent code={post?.mdx} />
      </article>
      <Suspense
        fallback={
          <div className="mt-10 text-center text-zinc-500">
            Loading content...
          </div>
        }
      ></Suspense>
    </>
  );
}
