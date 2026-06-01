"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/brand-logo";

const navItems = [
  { label: "機能", href: "/features" },
  { label: "課題別", href: "/solutions" },
  { label: "ブログ", href: "/blog" },
  { label: "お役立ち", href: "/resources" },
  { label: "専門家の推薦", href: "/case-studies" },
  { label: "料金", href: "/pricing" },
  { label: "会社概要", href: "/about" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <BrandLogo size={40} priority />
          <div>
            <div className="text-lg font-semibold tracking-tight text-foreground">社宝</div>
            <div className="text-xs text-muted-foreground">福利厚生 x 健康経営</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border/80 bg-background/80 px-2 py-1 shadow-sm lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-primary/18 text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm" className="rounded-full bg-background/70" asChild>
            <Link href="/contact">お問い合わせ</Link>
          </Button>
          <Button size="sm" className="rounded-full px-5 shadow-sm" asChild>
            <Link href="/contact?type=demo">無料デモを予約</Link>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-border bg-background/80 p-2.5 text-foreground shadow-sm lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
              <Button variant="outline" size="sm" className="rounded-full" asChild>
                <Link href="/contact">お問い合わせ</Link>
              </Button>
              <Button size="sm" className="rounded-full" asChild>
                <Link href="/contact?type=demo">無料デモを予約</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
