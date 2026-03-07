import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

export function PhoneMockup({ children, className }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative h-[400px] w-[200px] rounded-[2.5rem] border-[8px] border-foreground/90 bg-foreground/90 p-1 shadow-xl",
        className
      )}
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-0 z-10 h-6 w-20 -translate-x-1/2 rounded-b-2xl bg-foreground/90" />
      {/* Screen */}
      <div className="h-full w-full overflow-hidden rounded-[2rem] bg-background">
        {children}
      </div>
    </div>
  );
}
