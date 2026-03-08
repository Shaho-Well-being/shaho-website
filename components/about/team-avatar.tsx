"use client";

import { useState } from "react";

type Props = {
  src: string;
  name: string;
};

export function TeamAvatar({ src, name }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="flex h-full w-full items-center justify-center text-2xl font-semibold text-muted-foreground">
        {name.slice(0, 1)}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      className="h-full w-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}
