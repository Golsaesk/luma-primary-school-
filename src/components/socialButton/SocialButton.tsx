import { ReactNode } from "react";
import styles from "./SocialButton.module.css";
import { Button, ButtonProps } from "../button";

interface SocialButtonProps extends ButtonProps {
  icon: ReactNode;
}

export function SocialButton({ icon, children, ...props }: SocialButtonProps) {
  return (
    <Button variant="secondary" {...props}>
      <span className={styles.icon}>{icon}</span>

      {children}
    </Button>
  );
}
