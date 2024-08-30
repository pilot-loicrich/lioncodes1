import { FunctionComponent } from "react";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.leftPane}>
        <img
          className={styles.emptyPaneIcon}
          loading="lazy"
          alt=""
          src="/frame2@2x.png"
        />
      </div>
      <div className={styles.loginInfo}>
        <h1 className={styles.login}>Login</h1>
      </div>
      <div className={styles.credentials}>
        <div className={styles.inputFields}>
          <div className={styles.username}>
            <span>Username</span>
            <span className={styles.span}>*</span>
          </div>
          <div className={styles.background}>
            <div className={styles.backgroundChild} />
            <input
              className={styles.enterYourUser}
              placeholder="Enter your user name"
              type="text"
            />
          </div>
        </div>
        <div className={styles.inputFields}>
          <div className={styles.password}>
            <span>Password</span>
            <span className={styles.span}>*</span>
          </div>
          <div className={styles.background1}>
            <div className={styles.backgroundChild} />
            <input
              className={styles.enterYourPassword}
              placeholder="Enter your password"
              type="text"
            />
            <img
              className={styles.removeRedEyeIcon}
              alt=""
              src="/remove-red-eye.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
