import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CamerasHeader.module.css";

export type CamerasHeaderType = {
  className?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propMinHeight?: CSSProperties["minHeight"];
};

const CamerasHeader: FunctionComponent<CamerasHeaderType> = ({
  className = "",
  propBackgroundColor,
  propBorder,
  propMinHeight,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
      minHeight: propMinHeight,
    };
  }, [propBackgroundColor, propBorder, propMinHeight]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameGroup}>
        <div className={styles.vectorWrapper}>
          <img className={styles.vectorIcon} alt="" src="/vector-21.svg" />
        </div>
        <div className={styles.camera1}>Camera #1</div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon1} alt="" src="/vector-4.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector-3.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector-5.svg" />
        <div className={styles.div}>10</div>
        <div className={styles.div1}>02</div>
        <div className={styles.div2}>05</div>
      </div>
      <div className={styles.frameChild} />
    </div>
  );
};

export default CamerasHeader;
