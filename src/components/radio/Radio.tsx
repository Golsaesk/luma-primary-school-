import styles from "./Radio.module.css";
import * as RadioGroup from "@radix-ui/react-radio-group";

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioProps {
  value: string;

  onValueChange: (value: string) => void;

  options: RadioOption[];
}

export function Radio({ value, onValueChange, options }: RadioProps) {
  return (
    <RadioGroup.Root
      className={styles.group}
      value={value}
      onValueChange={onValueChange}
    >
      {options.map((option) => (
        <label key={option.value} className={styles.itemWrapper}>
          <RadioGroup.Item value={option.value} className={styles.item}>
            <RadioGroup.Indicator className={styles.indicator} />
          </RadioGroup.Item>

          <span className={styles.label}>{option.label}</span>
        </label>
      ))}
    </RadioGroup.Root>
  );
}
