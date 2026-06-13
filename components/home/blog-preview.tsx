import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blog/blog-card";
import { mockBlogPosts, type BlogPost } from "@/lib/microcms";
import { normalizeCategoryName } from "@/lib/utils";

type BlogPreviewProps = {
  posts?: BlogPost[];
};

export function BlogPreview({ posts: postsProp }: BlogPreviewProps = {}) {
  const posts = (postsProp ?? mockBlogPosts).slice(0, 3);

  return (
    <section className="bg-[linear-gradient(180deg,#f7fcfb_0%,#ffffff_100%)] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ヘッダー */}
        <div className="flex items-end justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Blog</div>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
              ブログ
            </h2>
          </div>
          <Button variant="outline" size="sm" className="rounded-full bg-white" asChild>
            <Link href="/blog">
              すべて見る
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* ── モバイル: コンパクト1行リスト ── */}
        <div className="mt-5 divide-y divide-border/60 rounded-2xl border border-border/40 bg-white shadow-sm lg:hidden">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/40"
            >
              {/* サムネイル */}
              <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-muted">
                {post.thumbnail?.url ? (
                  <Image
                    src={post.thumbnail.url}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                    unoptimized
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xl text-muted-foreground/20">
                    {normalizeCategoryName(post.category?.name).slice(0, 1)}
                  </div>
                )}
              </div>
              {/* テキスト */}
              <div className="min-w-0 flex-1">
                <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] text-secondary-foreground">
                  {normalizeCategoryName(post.category?.name)}
                </span>
                <p className="mt-0.5 line-clamp-1 text-xs font-semibold text-foreground">
                  {post.title}
                </p>
              </div>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            </Link>
          ))}
        </div>

        {/* ── デスクトップ: 3カラムカード ── */}
        <div className="mt-10 hidden grid-cols-3 gap-6 lg:grid">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
}
