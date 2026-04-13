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
    <section className="border-t border-border bg-muted/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ブログ
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              健康経営・福利厚生に関する最新情報をお届けします。
            </p>
          </div>
          <Button variant="outline" asChild>
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
