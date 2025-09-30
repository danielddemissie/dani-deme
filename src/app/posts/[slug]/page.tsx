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
      <article className="flex flex-col min-h-screen px-4 py-8 md:py-0 w-full max-w-5xl mx-auto">
        <header>
          <h1 className=" text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            {post.title}
          </h1>

          <div className="mb-10 flex items-center gap-4text-sm">
            <div>
              <span className="">{post.readingTime}</span>{" "}
              <span className="px-2">|</span>{" "}
              <PostDate dateString={post.createdAt} />{" "}
            </div>
          </div>
        </header>
        <MDXContent code={post.mdx} />
        <footer className="w-full my-10">
          <div className="mx-auto text-menu-foreground flex items-center justify-between">
            <p className="font-black text-center">Thank you for reading!</p>
          </div>
        </footer>
      </article>
      <Suspense
        fallback={<div className="mt-10 text-center">Loading post...</div>}
      ></Suspense>
    </>
  );
}
