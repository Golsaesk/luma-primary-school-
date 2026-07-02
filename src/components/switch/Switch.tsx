import styles from "./Switch.module.css";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export interface SwitchProps {
  checked: boolean;

  onCheckedChange: (checked: boolean) => void;

  label?: string;

  disabled?: boolean;
}

export function Switch({
  checked,
  onCheckedChange,
  label,
  disabled,
}: SwitchProps) {
  return (
    <label className={styles.wrapper}>
      <SwitchPrimitive.Root
        checked={checked}
        disabled={disabled}
        onCheckedChange={onCheckedChange}
        className={styles.root}
      >
        <SwitchPrimitive.Thumb className={styles.thumb} />
      </SwitchPrimitive.Root>

      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
