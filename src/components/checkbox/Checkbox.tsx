import { Check } from "lucide-react";
import styles from "./Checkbox.module.css";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  label?: string;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label className={styles.root}>
      <CheckboxPrimitive.Root className={styles.checkbox} {...props}>
        <CheckboxPrimitive.Indicator>
          <Check size={14} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
