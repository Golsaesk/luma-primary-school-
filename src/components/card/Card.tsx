import styles from "./Card.module.css";

type CardProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  variant?: "default" | "outlined" | "elevated";
};

export const Card = ({
  title,
  subtitle,
  children,
  variant = "default",
}: CardProps) => {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && <h3>{title}</h3>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}

      <div className={styles.content}>{children}</div>
    </div>
  );
};
