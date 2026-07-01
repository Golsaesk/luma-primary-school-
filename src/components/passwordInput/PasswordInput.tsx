import { Eye, EyeOff } from "lucide-react";
import { forwardRef, useState } from "react";
import { Input, InputProps } from "../input";
import styles from "./PasswordInput.module.css";

export interface PasswordInputProps extends InputProps {}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ endIcon, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <Input
        ref={ref}
        type={showPassword ? "text" : "password"}
        endIcon={
          endIcon ?? (
            <button
              type="button"
              className={styles.toggleButton}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )
        }
        {...props}
      />
    );
  },
);

PasswordInput.displayName = "PasswordInput";
