import { Post } from "content-collections";
import Link from "next/link";

interface PostItemProps {
  post: Post;
}

export const PostItem = ({ post }: PostItemProps) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="group mb-4 pb-4 py-2 border-dotted border-2 rounded-base px-4">
        <h2 className="mb-2 text-lg font-semibold transition-colors ">
          {post.title}
        </h2>
        <p className="text-menu-foreground">{post.summary}</p>
      </article>
    </Link>
  );
};
