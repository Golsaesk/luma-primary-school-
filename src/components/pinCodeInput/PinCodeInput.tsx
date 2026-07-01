import styles from "./PinCodeInput.module.css";
import { OTPInput, SlotProps } from "input-otp";

function Slot(props: SlotProps) {
  return (
    <div className={styles.slot} data-active={props.isActive}>
      {props.char ?? ""}
    </div>
  );
}

interface PinCodeInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function PinCodeInput({ value, onChange }: PinCodeInputProps) {
  return (
    <OTPInput
      maxLength={4}
      value={value}
      onChange={onChange}
      containerClassName={styles.container}
      render={({ slots }) =>
        slots.map((slot, index) => <Slot key={index} {...slot} />)
      }
    />
  );
}
