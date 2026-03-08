import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { BlogCard } from "@/components/blog/blog-card";
import { fetchBlogPosts } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ブログ | 社宝",
  description: "健康経営、福利厚生、人事労務に関する最新情報をお届けします。",
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts(20);
  const [featuredPost, ...otherPosts] = posts;

  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            ブログ
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            健康経営、福利厚生、人事労務に関する最新のトレンドや
            実践的なノウハウをお届けします。
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href={`/blog/${featuredPost.id}`} className="group block">
            <Card className="overflow-hidden transition-all hover:border-foreground/20 hover:shadow-lg">
              <CardContent className="grid gap-8 p-0 lg:grid-cols-2">
                <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-muted lg:aspect-auto lg:h-full">
                  {featuredPost.thumbnail?.url ? (
                    <Image
                      src={featuredPost.thumbnail.url}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="text-6xl text-muted-foreground/20">
                      {featuredPost.category?.name?.slice(0, 1) ?? "?"}
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="rounded-full bg-accent px-3 py-1 text-accent-foreground">
                      {featuredPost.category?.name ?? "—"}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {formatDate(featuredPost.publishedAt)}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold leading-snug text-foreground group-hover:text-accent sm:text-3xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground">{featuredPost.excerpt}</p>
                  {featuredPost.author?.name && (
                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                        {featuredPost.author.name.slice(0, 1)}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {featuredPost.author.name}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        </section>
      )}

      {/* Other Posts */}
      {otherPosts.length > 0 && (
        <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">最新の記事</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ))}
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-muted/50 px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-foreground">最新情報をお届けします</h2>
          <p className="mt-3 text-muted-foreground">
            健康経営・福利厚生に関する最新のトレンドやノウハウを定期的にお届け
          </p>
          <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="メールアドレス"
              className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="rounded-lg bg-foreground px-6 py-2 font-medium text-background transition-colors hover:bg-foreground/90"
            >
              登録する
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
