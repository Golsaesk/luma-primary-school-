import clsx from "clsx";
import styles from "./Divider.module.css";

export interface DividerProps {
  label?: string;

  orientation?: "horizontal" | "vertical";

  className?: string;
}

export function Divider({
  label,
  orientation = "horizontal",
  className,
}: DividerProps) {
  if (orientation === "vertical") {
    return <div className={clsx(styles.vertical, className)} />;
  }

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.line} />

      {label && <span className={styles.text}>{label}</span>}

      <div className={styles.line} />
    </div>
  );
}
