import clsx from "clsx";
import { X } from "lucide-react";
import styles from "./Chip.module.css";
import { HTMLAttributes, ReactNode } from "react";

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;

  removable?: boolean;

  onRemove?: () => void;
}

export function Chip({
  icon,
  removable,
  onRemove,
  children,
  className,
  onClick,
  ...props
}: ChipProps) {
  return (
    <div
      className={clsx(styles.chip, onClick && styles.clickable, className)}
      onClick={onClick}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}

      {children}

      {removable && (
        <button
          type="button"
          className={styles.remove}
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
