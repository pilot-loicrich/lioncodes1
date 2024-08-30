import { FunctionComponent } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  className?: string;
};

const Button: FunctionComponent<ButtonType> = ({ className = "" }) => {
  return (
    <button className={[styles.button, className].join(" ")}>
      <b className={styles.button1}>Login</b>
    </button>
  );
};

export default Button;
