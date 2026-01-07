import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`
        rounded-2xl
        bg-grey/30
        backdrop-blur-xl
        border border-white/30
        shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
