import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/lib/microcms";
import { formatDate, normalizeCategoryName } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPost;
  sizes?: string;
  showDate?: boolean;
  showAuthor?: boolean;
};

export function BlogCard({
  post,
  sizes = "(max-width: 1024px) 100vw, 33vw",
  showDate = true,
  showAuthor = true,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`} className="group">
      <Card className="h-full transition-all hover:border-foreground/20 hover:shadow-lg">
        <CardContent className="flex h-full flex-col p-0">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
            {post.thumbnail?.url ? (
              <Image
                src={post.thumbnail.url}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes={sizes}
              />
            ) : (
              <div className="flex h-full items-center justify-center text-4xl text-muted-foreground/20">
                {normalizeCategoryName(post.category?.name).slice(0, 1) || "?"}
              </div>
            )}
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-center gap-3 text-sm">
              <span className="rounded-full bg-secondary px-2.5 py-0.5 text-secondary-foreground">
                {normalizeCategoryName(post.category?.name) || "—"}
              </span>
              {showDate && (
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {formatDate(post.publishedAt)}
                </span>
              )}
            </div>

            <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground group-hover:text-accent">
              {post.title}
            </h3>

            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
              {post.excerpt}
            </p>

            {showAuthor && post.author?.name && (
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                  {post.author.name.slice(0, 1)}
                </div>
                <span className="text-sm text-muted-foreground">{post.author.name}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
