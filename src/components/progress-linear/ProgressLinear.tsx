import styles from "./ProgressLinear.module.css";

type ProgressLinearProps = {
  value: number; // 0 - 100
  label?: string;
};

export const ProgressLinear = ({ value, label }: ProgressLinearProps) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <div className={styles.label}>
          <span>{label}</span>
          <span>{value}%</span>
        </div>
      )}

      <div className={styles.track}>
        <div className={styles.bar} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
};
