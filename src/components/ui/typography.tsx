import { cn } from "@/lib/utils";

export const Typography = ({ text, className }: { text: string, className: string | null | undefined }) => {
  return (
    <div>
      <h2 className={cn(
        "mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        className
      )}>
        {text}
      </h2>
    </div>
  );
};
