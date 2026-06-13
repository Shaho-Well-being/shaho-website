import { Quote } from "lucide-react";
import { ExpertAvatar } from "@/components/endorsements/expert-avatar";
import type { Endorsement } from "@/lib/data/endorsements";

export function EndorsementCard({
  endorsement,
  showCredentials = false,
}: {
  endorsement: Endorsement;
  showCredentials?: boolean;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[34px] border border-border/80 bg-white p-7 shadow-[0_25px_80px_-45px_rgba(28,92,95,0.35)] transition-shadow hover:shadow-[0_30px_90px_-40px_rgba(28,92,95,0.45)] sm:p-9">
      {/* 装飾の引用符 */}
      <Quote
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-2 h-24 w-24 text-primary/5"
        strokeWidth={1.5}
      />

      <div className="flex items-start gap-5">
        <ExpertAvatar
          src={endorsement.photo}
          name={endorsement.name}
          objectPosition={endorsement.photoPosition}
          sizeClassName="h-20 w-20 sm:h-24 sm:w-24"
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-balance text-lg font-bold leading-snug text-foreground sm:text-xl">
            {endorsement.heading}
          </h3>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-sm font-semibold text-primary">
              {endorsement.title}
            </span>
          </div>
          {endorsement.organization && (
            <p className="mt-0.5 text-xs text-muted-foreground">
              {endorsement.organization}
            </p>
          )}
          <p className="mt-2 text-base font-bold tracking-tight text-foreground">
            {endorsement.name}
            <span className="ml-1 text-xs font-normal text-muted-foreground">
              様
            </span>
          </p>
          {showCredentials && endorsement.credentials && endorsement.credentials.length > 0 && (
            <ul className="mt-2 space-y-0.5 text-xs text-muted-foreground">
              {endorsement.credentials.map((credential) => (
                <li key={`${credential.label}-${credential.registrationNumber}`}>
                  {credential.label}（登録番号：{credential.registrationNumber}）
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <p className="mt-6 text-pretty text-sm leading-7 text-muted-foreground sm:text-base">
        {endorsement.quote}
      </p>
    </article>
  );
}
