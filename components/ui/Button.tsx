import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "ghost" | "teal";

const base =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.99]";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-[#3a7ed1]",
  teal: "bg-brand-teal text-white hover:bg-brand-teal-dark",
  ghost: "border border-white/40 text-white hover:bg-white/10",
};

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type LinkProps = CommonProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "href" | "className" | "children"
  >;

type ButtonProps = CommonProps & { href?: undefined } & Omit<
    ComponentPropsWithoutRef<"button">,
    "className" | "children"
  >;

export function Button(props: LinkProps | ButtonProps) {
  const { variant = "primary", className = "", children } = props;
  const cn = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, variant: _v, className: _c, children: _ch, ...rest } = props;
    return (
      <Link href={href} className={cn} {...rest}>
        {children}
      </Link>
    );
  }
  const { variant: _v, className: _c, children: _ch, href: _h, ...rest } =
    props as ButtonProps;
  return (
    <button className={cn} {...rest}>
      {children}
    </button>
  );
}
