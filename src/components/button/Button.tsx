import { VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { buttonVariants } from "./buttonVariants";

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export function Button({
  children,
  variant,
  size,
  fullWidth,
  loading,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        buttonVariants({
          variant,
          size,
          fullWidth,
          loading,
        }),
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
