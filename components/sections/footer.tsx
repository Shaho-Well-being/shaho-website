import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

const footerLinks = {
  製品: [
    { label: "特徴", href: "#features" },
    { label: "料金", href: "#pricing" },
    { label: "セキュリティ", href: "#security" },
  ],
  サポート: [
    { label: "よくある質問", href: "#faq" },
    { label: "お問い合わせ", href: "#contact" },
    { label: "導入サポート", href: "#" },
  ],
  会社情報: [
    { label: "会社概要", href: "#" },
    { label: "採用情報", href: "#" },
    { label: "ニュース", href: "#" },
  ],
  法的情報: [
    { label: "プライバシーポリシー", href: "#" },
    { label: "利用規約", href: "#" },
    { label: "特定商取引法に基づく表記", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <BrandLogo size={36} />
              <span className="text-xl font-bold text-foreground">社宝</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              福利厚生と健康管理を一つにまとめた企業向けプラットフォーム
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} 社宝 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
