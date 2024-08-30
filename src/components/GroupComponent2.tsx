import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent2.module.css";

export type GroupComponent2Type = {
  className?: string;
  rectangle63?: string;
  camera3?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  className = "",
  propBackgroundImage,
  rectangle63,
  camera3,
  prop,
  prop1,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleParent} style={groupDiv1Style}>
          <img className={styles.frameChild} alt="" src={rectangle63} />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.camera3}>{camera3}</div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div
              className={styles.date12062025}
            >{`Date : 12/06/2025 14:55:50 `}</div>
          </div>
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
          <div className={styles.div}>{prop}</div>
        </div>
        <div className={styles.vectorWrapper}>
          <img
            className={styles.vectorIcon1}
            loading="lazy"
            alt=""
            src="/vector-22.svg"
          />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.div}>00</div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.vectorGroup}>
            <img
              className={styles.vectorIcon2}
              loading="lazy"
              alt=""
              src="/vector-31.svg"
            />
            <div className={styles.div2}>{prop1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;
