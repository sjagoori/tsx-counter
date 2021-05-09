import styles from "./Button.module.css";

interface buttonProps{
  label: String;
  onClick: () => void;
}

export default function Button(props: buttonProps) {
  return (
    <>
      <div className={styles.container} onClick={props.onClick}>
        <span>{props.label}</span>
      </div>
    </>
  );
}
