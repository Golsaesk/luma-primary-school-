import clsx from "clsx";
import { forwardRef, InputHTMLAttributes, ReactNode, useId } from "react";
import styles from "./Input.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      startIcon,
      endIcon,
      className,
      required,
      disabled,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id ?? useId();

    return (
      <div className={styles.wrapper}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}

        <div
          className={clsx(
            styles.field,
            errorMessage && styles.error,
            disabled && styles.disabled,
            className,
          )}
        >
          {startIcon && <span className={styles.icon}>{startIcon}</span>}

          <input
            id={inputId}
            ref={ref}
            className={styles.input}
            disabled={disabled}
            aria-invalid={!!errorMessage}
            {...props}
          />

          {endIcon && <span className={styles.icon}>{endIcon}</span>}
        </div>

        {errorMessage ? (
          <span className={styles.errorText}>{errorMessage}</span>
        ) : (
          helperText && <span className={styles.helper}>{helperText}</span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
