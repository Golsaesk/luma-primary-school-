import clsx from "clsx";
import { HTMLAttributes } from "react";
import { badgeVariants } from "./badgeVariants";
import { VariantProps } from "class-variance-authority";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({
  children,
  variant,
  size,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(
        badgeVariants({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
