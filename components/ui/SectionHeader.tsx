import { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  divider?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  divider = true,
  className = "",
}: Props) {
  return (
    <div className={`text-center ${className}`}>
      <p className="font-body text-terracota text-[10px] tracking-[0.55em] uppercase mb-4">
        {eyebrow}
      </p>
      <h2 className="font-heading text-4xl lg:text-5xl text-chocolate font-medium mb-5">
        {title}
      </h2>
      {divider && <div className="w-14 h-px bg-nude mx-auto" />}
    </div>
  );
}
