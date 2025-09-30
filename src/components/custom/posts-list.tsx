import { allPosts } from "content-collections";
import { PostYearGroup } from "./post-year-group";

interface PostsProps {
  posts: typeof allPosts;
}

export const PostList = ({ posts }: PostsProps) => {
  // Group posts into years
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.createdAt).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, (typeof allPosts)[0][]>);

  return (
    <section
      id="posts"
      className="flex flex-col w-full items-start px-4 py-8 md:py-0 max-w-5xl mx-auto"
    >
      <div className="text-left mb-16 w-full">
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
          BLOG <span className="text-accent">POSTS</span>
        </h2>
        <div className="neo-badge bg-primary text-primary-foreground mx-auto">
          MY WRITINGS AND THOUGHTS
        </div>
      </div>
      <div>
        {Object.entries(postsByYear)
          .sort(([a], [b]) => (parseInt(a) > parseInt(b) ? -1 : 1))
          .map(([year, posts]) => (
            <PostYearGroup key={year} year={parseInt(year)} posts={posts} />
          ))}
      </div>
    </section>
  );
};
