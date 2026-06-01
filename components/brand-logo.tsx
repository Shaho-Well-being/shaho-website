import { cn } from "@/lib/utils";

type BrandLogoProps = {
  /** 正方形アイコンの一辺（px） */
  size?: number;
  className?: string;
  priority?: boolean;
};

/** 社宝アイコン（public/SHAHO.png）。ファイルは差し替えず、このパスをそのまま表示する */
export function BrandLogo({ size = 40, className, priority }: BrandLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/SHAHO.png"
      alt="社宝"
      width={size}
      height={size}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={cn("shrink-0 object-contain", className)}
    />
  );
}
