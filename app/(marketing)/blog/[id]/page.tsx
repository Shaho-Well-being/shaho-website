import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, Share2, Twitter, Linkedin } from "lucide-react";
import { BlogCard } from "@/components/blog/blog-card";
import { fetchBlogPost, fetchBlogPosts, fetchBlogStaticParams } from "@/lib/data/blog";
import { formatDate, normalizeCategoryName } from "@/lib/utils";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await fetchBlogPost(id);

  if (!post) {
    return { title: "記事が見つかりません | 社宝" };
  }

  return {
    title: `${post.title} | 社宝ブログ`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return fetchBlogStaticParams();
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const [post, allPosts] = await Promise.all([
    fetchBlogPost(id),
    fetchBlogPosts(10),
  ]);

  if (!post) {
    notFound();
  }

  const relatedPosts = allPosts.filter((p) => p.id !== id).slice(0, 3);

  return (
    <div className="py-16 lg:py-24">
      {/* Back Link */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          ブログ一覧に戻る
        </Link>
      </div>

      {/* Article Header */}
      <article className="mx-auto mt-8 max-w-3xl px-4 sm:px-6 lg:px-8">
        <header>
          <div className="flex items-center gap-3 text-sm">
            <span className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
              {normalizeCategoryName(post.category?.name) || "—"}
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              {formatDate(post.publishedAt)}
            </span>
          </div>

          <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>

          {post.author?.name && (
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-lg font-semibold text-muted-foreground">
                {post.author.name.slice(0, 1)}
              </div>
              <div>
                <p className="font-medium text-foreground">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">社宝編集部</p>
              </div>
            </div>
          )}
        </header>

        {/* Featured Image */}
        <div className="mt-8 overflow-hidden rounded-2xl">
          <div className="relative aspect-[16/9] w-full bg-muted">
            {post.thumbnail?.url ? (
              <Image
                src={post.thumbnail.url}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center text-6xl text-muted-foreground/20">
                {normalizeCategoryName(post.category?.name).slice(0, 1) || "?"}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg mt-8 max-w-none">
          <p className="lead">{post.excerpt}</p>

          <h2>はじめに</h2>
          <p>
            働き方改革やウェルビーイングへの関心が高まる中、企業における福利厚生と健康管理の重要性は
            ますます増しています。本記事では、最新のトレンドと実践的なアプローチについて解説します。
          </p>

          <h2>現状の課題</h2>
          <p>
            多くの企業では、福利厚生と健康管理が別々のシステムで運用されており、
            データの一元管理や効果測定が困難な状況にあります。また、従業員のニーズが多様化する中、
            画一的な制度では満足度を高めることが難しくなっています。
          </p>

          <h2>解決のアプローチ</h2>
          <p>
            これらの課題を解決するためには、統合的なプラットフォームの導入が効果的です。
            福利厚生、健康診断、ストレスチェックなどのデータを一元管理することで、
            より効果的な施策立案と効果測定が可能になります。
          </p>

          <h2>まとめ</h2>
          <p>
            健康経営の実現には、福利厚生と健康管理の統合的なアプローチが不可欠です。
            社宝は、これらの課題を解決するオールインワンプラットフォームとして、
            多くの企業様の健康経営をサポートしています。
          </p>
        </div>

        {/* Share */}
        <div className="mt-12 flex items-center gap-4 border-t border-border pt-8">
          <span className="text-sm text-muted-foreground">この記事をシェア</span>
          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">関連記事</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <BlogCard
                key={relatedPost.id}
                post={relatedPost}
                sizes="(max-width: 1024px) 50vw, 33vw"
                showDate={false}
                showAuthor={false}
              />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto mt-16 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-foreground px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-background">健康経営を始めませんか？</h2>
          <p className="mt-3 text-background/80">
            社宝で福利厚生と健康管理を一元化。導入のご相談はお問い合わせください。
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-8 bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link href="/contact">
              お問い合わせ
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
