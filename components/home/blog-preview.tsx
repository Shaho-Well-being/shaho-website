import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blog/blog-card";
import { mockBlogPosts, type BlogPost } from "@/lib/microcms";

type BlogPreviewProps = {
  posts?: BlogPost[];
};

export function BlogPreview({ posts: postsProp }: BlogPreviewProps = {}) {
  const posts = (postsProp ?? mockBlogPosts).slice(0, 3);

  return (
    <section className="bg-[linear-gradient(180deg,#f7fcfb_0%,#ffffff_100%)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Blog
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              ブログ
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              健康経営・福利厚生に関する最新情報をお届けします。
            </p>
          </div>
          <Button variant="outline" className="rounded-full bg-white" asChild>
            <Link href="/blog">
              すべての記事を見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
