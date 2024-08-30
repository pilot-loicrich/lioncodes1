import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent3.module.css";

export type GroupComponent3Type = {
  className?: string;
  rectangle63?: string;
  camera5?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const GroupComponent3: FunctionComponent<GroupComponent3Type> = ({
  className = "",
  propBackgroundImage,
  rectangle63,
  camera5,
  prop,
  propMinWidth,
  prop1,
  propMinWidth1,
  prop2,
}) => {
  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent} style={groupDiv2Style}>
        <img className={styles.frameChild} alt="" src={rectangle63} />
        <div className={styles.cameraFeedPlaceholder}>
          <div className={styles.cameraFeedPlaceholderChild} />
          <div className={styles.camera5}>{camera5}</div>
        </div>
        <div className={styles.cameraFeedPlaceholder1}>
          <div className={styles.cameraFeedPlaceholderItem} />
          <div
            className={styles.date12062025}
          >{`Date : 12/06/2025 14:55:50 `}</div>
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-12.svg"
        />
        <div className={styles.wrapper}>
          <div className={styles.div} style={divStyle}>
            {prop}
          </div>
        </div>
        <div className={styles.vectorWrapper}>
          <img
            className={styles.vectorIcon1}
            loading="lazy"
            alt=""
            src="/vector-22.svg"
          />
        </div>
        <div className={styles.container}>
          <div className={styles.div1} style={div1Style}>
            {prop1}
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.vectorGroup}>
            <img
              className={styles.vectorIcon2}
              loading="lazy"
              alt=""
              src="/vector-31.svg"
            />
            <div className={styles.frame}>
              <div className={styles.div1}>{prop2}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent3;
