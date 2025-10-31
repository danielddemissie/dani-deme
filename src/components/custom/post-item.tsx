import { Post } from "content-collections";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface PostItemProps {
  post: Post;
}

export const PostItem = ({ post }: PostItemProps) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card className="group mb-4 pb-4 py-2 rounded-base px-4">
        <CardHeader className="pt-2">
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="text-menu-foreground pb-2">
          <CardDescription>
            {post.summary && (
              <p className="text-menu-foreground">
                {post.summary.split(/(`[^`]+`)/g).map((part, i) =>
                  part.startsWith("`") && part.endsWith("`") ? (
                    <code
                      key={i}
                      className="relative rounded bg-secondary-background px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-main-foreground"
                    >
                      {part.slice(1, -1)}
                    </code>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
            )}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};
