import styles from "./Button.module.css";
import { cva } from "class-variance-authority";

export const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
    },

    size: {
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
    },

    fullWidth: {
      true: styles.fullWidth,
    },

    loading: {
      true: styles.loading,
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
    fullWidth: true,
    loading: false,
  },
});
