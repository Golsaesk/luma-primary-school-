import { Delete } from "lucide-react";
import styles from "./Keypad.module.css";

export interface KeypadProps {
  onKeyPress: (value: string) => void;

  onDelete?: () => void;
}

const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "delete"];

export function Keypad({ onKeyPress, onDelete }: KeypadProps) {
  return (
    <div className={styles.container}>
      {KEYS.map((key) => {
        if (key === "") {
          return <div key="empty" className={styles.empty} />;
        }

        if (key === "delete") {
          return (
            <button
              key={key}
              type="button"
              className={styles.key}
              onClick={onDelete}
            >
              <Delete size={24} />
            </button>
          );
        }

        return (
          <button
            key={key}
            type="button"
            className={styles.key}
            onClick={() => onKeyPress(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
