"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const features = [
  { label: "福利厚生", href: "/features/benefits", description: "従業員向け福利厚生プログラム" },
  { label: "健康管理", href: "/features/health", description: "健康データの一元管理" },
  { label: "健診・ストレスチェック", href: "/features/checkup", description: "法定健診とストレスチェック対応" },
  { label: "管理者機能", href: "/features/admin", description: "人事・総務向け管理ツール" },
];

const navItems = [
  { label: "機能", href: "/features", hasDropdown: true },
  { label: "導入事例", href: "/case-studies" },
  { label: "ブログ", href: "/blog" },
  { label: "料金", href: "/pricing" },
  { label: "会社概要", href: "/about" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/features") {
      return pathname.startsWith("/features");
    }
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
            <span className="text-sm font-bold text-background">社</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">社宝</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <DropdownMenu key={item.href}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64">
                  {features.map((feature) => (
                    <DropdownMenuItem key={feature.href} asChild>
                      <Link href={feature.href} className="flex flex-col items-start gap-1 py-2">
                        <span className="font-medium">{feature.label}</span>
                        <span className="text-xs text-muted-foreground">{feature.description}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/contact">お問い合わせ</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/contact?type=demo">無料デモを予約</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="mb-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                機能
              </span>
              <div className="mt-2 flex flex-col gap-1">
                {features.map((feature) => (
                  <Link
                    key={feature.href}
                    href={feature.href}
                    className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {feature.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              {navItems.filter((item) => !item.hasDropdown).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">お問い合わせ</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/contact?type=demo">無料デモを予約</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
