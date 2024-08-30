import { FunctionComponent } from "react";
import Content from "./Content";
import Button from "./Button";
import styles from "./Login.module.css";

export type LoginType = {
  className?: string;
};

const Login: FunctionComponent<LoginType> = ({ className = "" }) => {
  return (
    <form className={[styles.login, className].join(" ")}>
      <section className={styles.backgroundImage} />
      <Content />
      <div className={styles.actions}>
        <Button />
        <div className={styles.signup}>
          <div className={styles.noAccountYetParent}>
            <div className={styles.noAccountYet}>No account yet ?</div>
            <b className={styles.crerUnCompte}> Sign Up</b>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
