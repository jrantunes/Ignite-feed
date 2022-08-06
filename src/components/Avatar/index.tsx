import styles from "./Avatar.module.css";

type AvatarProps = {
  imageUrl: string;
  hasBorder?: boolean;
};

export function Avatar({ imageUrl, hasBorder = true }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={imageUrl}
    />
  );
}
