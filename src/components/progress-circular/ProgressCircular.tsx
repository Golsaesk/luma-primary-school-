import styles from "./ProgressCircular.module.css";

type ProgressCircularProps = {
  value: number; 
  size?: number;
  strokeWidth?: number;
};

export const ProgressCircular = ({
  value,
  size = 80,
  strokeWidth = 8,
}: ProgressCircularProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className={styles.wrapper} style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          className={styles.bg}
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        <circle
          className={styles.progress}
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      <div className={styles.label}>{value}%</div>
    </div>
  );
};
