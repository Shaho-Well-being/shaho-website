import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

const footerLinks = {
  product: {
    title: "課題別・機能",
    links: [
      { label: "課題別一覧", href: "/solutions" },
      { label: "ストレスチェック・法令対応", href: "/solutions/stress-check" },
      { label: "福利厚生・従業員満足度", href: "/solutions/engagement" },
      { label: "健康経営優良法人認定", href: "/solutions/health-management" },
      { label: "機能一覧", href: "/features" },
      { label: "管理画面（人事向け）", href: "/features/admin-web" },
      { label: "従業員アプリ", href: "/features/employee-app" },
      { label: "料金", href: "/pricing" },
    ],
  },
  resources: {
    title: "リソース",
    links: [
      { label: "お役立ち資料", href: "/resources" },
      { label: "導入事例", href: "/case-studies" },
      { label: "ブログ", href: "/blog" },
    ],
  },
  company: {
    title: "会社情報",
    links: [
      { label: "会社概要", href: "/about" },
      { label: "採用情報", href: "/careers" },
      { label: "お問い合わせ", href: "/contact" },
    ],
  },
  legal: {
    title: "法的情報",
    links: [
      { label: "利用規約", href: "/terms" },
      { label: "プライバシーポリシー", href: "https://mobile-app-systems.co.jp/privacypolicy/", external: true },
      { label: "セキュリティポリシー", href: "https://mobile-app-systems.co.jp/security-policy/", external: true },
      { label: "反社会的勢力への対応", href: "https://mobile-app-systems.co.jp/basic-policyagainst-anti-social-forces/", external: true },
      { label: "特定商取引法に基づく表記", href: "/legal" },
    ],
  },
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <BrandLogo size={32} />
              <span className="text-lg font-semibold tracking-tight text-foreground">社宝</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              福利厚生と健康管理を、これひとつで。従業員の健康と幸福を支援するプラットフォーム。
            </p>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      {...("external" in link && link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} 社宝 Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://twitter.com" className="text-muted-foreground transition-colors hover:text-foreground">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground transition-colors hover:text-foreground">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
