import styles from "./Avatar.module.css";

type AvatarProps = {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  status?: "online" | "offline" | "busy";
};

export const Avatar = ({
  src,
  alt = "avatar",
  size = "md",
  status,
}: AvatarProps) => {
  return (
    <div className={`${styles.avatar} ${styles[size]}`}>
      <img src={src} alt={alt} />

      {status && <span className={`${styles.status} ${styles[status]}`} />}
    </div>
  );
};
