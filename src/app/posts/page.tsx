import { allPosts } from "content-collections";
import { PostList } from "@/components/custom/posts-list";

export default function Posts() {
  allPosts.sort((a, b) => {
    return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
  });

  return <PostList posts={allPosts} />;
}
