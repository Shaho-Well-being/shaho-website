"use client";

import Image from "next/image";
import { useState } from "react";

type ExpertAvatarProps = {
  src?: string;
  name: string;
  /** Tailwind の幅・高さクラス（例: "h-20 w-20"） */
  sizeClassName?: string;
  /** CSS object-position 値（例: "center 35%"）。未指定時は上部基準。 */
  objectPosition?: string;
};

/**
 * 専門家の顔写真を円形で表示する。
 * 画像が未設定 / 読み込み失敗の場合は氏名のイニシャルを表示する。
 */
export function ExpertAvatar({
  src,
  name,
  sizeClassName = "h-20 w-20",
  objectPosition = "center top",
}: ExpertAvatarProps) {
  const [failed, setFailed] = useState(false);
  const initial = name.trim().charAt(0);

  return (
    <div
      className={`relative ${sizeClassName} shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-primary/15 to-primary/5 ring-2 ring-primary/15`}
    >
      {src && !failed ? (
        <Image
          src={src}
          alt={`${name}様`}
          fill
          sizes="96px"
          className="object-cover"
          style={{ objectPosition }}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-primary">
          {initial}
        </div>
      )}
    </div>
  );
}
