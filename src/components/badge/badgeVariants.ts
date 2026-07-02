import styles from "./Badge.module.css";
import { cva } from "class-variance-authority";

export const badgeVariants = cva(styles.badge, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      success: styles.success,
      warning: styles.warning,
      danger: styles.danger,
      outline: styles.outline,
    },

    size: {
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
