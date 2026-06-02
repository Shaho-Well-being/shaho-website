import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarketingCtaPanelProps = {
  title: ReactNode;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  /** 料金・会社概要など狭いカラム向け */
  compact?: boolean;
};

export function MarketingCtaPanel({
  title,
  description,
  children,
  footer,
  className,
  compact = false,
}: MarketingCtaPanelProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-secondary via-accent/55 to-primary/20 px-6 py-14 text-center shadow-[0_24px_80px_-42px] shadow-primary/25 sm:px-12 sm:py-16",
        compact ? "sm:py-14" : "rounded-[44px] sm:py-20",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
      >
        <div className="absolute -right-20 top-0 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-white/50 blur-3xl" />
      </div>

      <div className={cn("relative mx-auto", compact ? "max-w-2xl" : "max-w-2xl")}>
        <h2
          className={cn(
            "text-balance font-bold tracking-tight text-foreground",
            compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
          )}
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-pretty text-base font-normal leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </div>

      {footer ? (
        <div className="relative mt-12 border-t border-primary/15 pt-8 sm:mt-14">
          {footer}
        </div>
      ) : null}
    </div>
  );
}

/** ヒーロー・ヘッダーと同じボタンスタイル */
export const marketingCtaButtonPrimary =
  "h-12 rounded-full px-8 text-base font-semibold shadow-sm sm:h-14";

export const marketingCtaButtonSecondary =
  "h-12 rounded-full border-primary/25 bg-white px-8 text-base font-semibold text-foreground shadow-sm hover:bg-white/90 sm:h-14";
