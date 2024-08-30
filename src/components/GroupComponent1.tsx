import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
  rectangle63?: string;
  camera1?: string;
  cameraFeedPlaceholderItem?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propWidth?: CSSProperties["width"];
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  propBackgroundImage,
  rectangle63,
  propWidth,
  camera1,
  cameraFeedPlaceholderItem,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const cameraFeedCameraStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.cameraFeedItemParent, className].join(" ")}>
      <div className={styles.cameraFeedItem}>
        <div className={styles.rectangleParent} style={groupDivStyle}>
          <img className={styles.frameChild} alt="" src={rectangle63} />
          <div
            className={styles.cameraFeedCamera}
            style={cameraFeedCameraStyle}
          >
            <div className={styles.cameraFeedCameraChild} />
            <div className={styles.camera1}>{camera1}</div>
          </div>
          <div className={styles.cameraFeedDateContainer}>
            <div className={styles.cameraFeedDateContainerChild} />
            <div
              className={styles.date12062025}
            >{`Date : 12/06/2025 14:55:50 `}</div>
          </div>
        </div>
      </div>
      <div className={styles.cameraFeedSeparatorParent}>
        <img
          className={styles.cameraFeedSeparator}
          loading="lazy"
          alt=""
          src="/vector-12.svg"
        />
        <div className={styles.cameraFeedPlaceholderContai}>
          <div className={styles.cameraFeedPlaceholder}>03</div>
        </div>
        <div className={styles.cameraFeedSeparatorWrapper}>
          <img
            className={styles.cameraFeedSeparator1}
            loading="lazy"
            alt=""
            src="/vector-22.svg"
          />
        </div>
        <div className={styles.cameraFeedPlaceholderContai}>
          <div className={styles.cameraFeedPlaceholder}>00</div>
        </div>
        <div className={styles.cameraFeedBottomRowWrapper}>
          <div className={styles.cameraFeedBottomRow}>
            <img
              className={styles.cameraFeedSeparator2}
              loading="lazy"
              alt=""
              src="/vector-31.svg"
            />
            <div className={styles.cameraFeedPlaceholderContai2}>
              <div className={styles.cameraFeedPlaceholder}>
                {cameraFeedPlaceholderItem}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
