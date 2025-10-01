import { Hero } from "@/components/custom/hero";
import { Projects } from "@/components/custom/projects";
import { Experience } from "@/components/custom/experiences";
import { About } from "@/components/custom/about";
import { Contact } from "@/components/custom/contact";
import { allPosts } from "content-collections";
import { PostList } from "@/components/custom/posts-list";

export default function Home() {
  allPosts.sort((a, b) => {
    return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
  });
  return (
    <main>
      <div className="flex flex-col gap-10 items-center-safe">
        <Hero />
        <About />
        <Projects />
        <PostList posts={allPosts} />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
