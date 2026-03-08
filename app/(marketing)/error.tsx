"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <h2 className="text-2xl font-bold text-foreground">エラーが発生しました</h2>
      <p className="text-muted-foreground">
        ページの読み込み中に問題が発生しました。しばらくしてから再度お試しください。
      </p>
      <div className="flex gap-4">
        <Button onClick={reset}>もう一度試す</Button>
        <Button variant="outline" asChild>
          <Link href="/">トップに戻る</Link>
        </Button>
      </div>
    </div>
  );
}
