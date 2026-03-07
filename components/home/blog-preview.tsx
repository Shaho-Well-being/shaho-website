import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";
import { mockBlogPosts } from "@/lib/microcms";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPreview() {
  const posts = mockBlogPosts.slice(0, 3);

  return (
    <section className="border-t border-border bg-muted/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ブログ
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              健康経営・福利厚生に関する最新情報をお届け
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/blog">
              すべての記事を見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Blog Posts Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group">
              <Card className="h-full transition-all hover:border-foreground/20 hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-secondary-foreground">
                      {post.category.name}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                      {post.author.name.slice(0, 1)}
                    </div>
                    <span className="text-sm text-muted-foreground">{post.author.name}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
