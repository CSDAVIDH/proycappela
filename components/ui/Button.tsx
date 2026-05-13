import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "light";
type BtnSize = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-chocolate text-cream hover:bg-terracota",
  outline: "border border-cacao text-cacao hover:bg-cacao hover:text-cream",
  light:   "bg-cream text-chocolate hover:bg-nude",
};

const sizeClasses: Record<BtnSize, string> = {
  sm: "text-[11px] tracking-[0.18em] px-6 py-3",
  md: "text-[11px] tracking-[0.22em] px-9 py-4",
  lg: "text-[11px] tracking-[0.22em] px-12 py-4",
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: BtnSize;
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <button
      className={`font-body uppercase transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
