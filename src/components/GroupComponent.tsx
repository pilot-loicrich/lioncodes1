import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
  vector?: string;
  reactive?: string;
  realtimeAnormalieDetectio?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  vector,
  propHeight,
  propHeight1,
  propDisplay,
  reactive,
  realtimeAnormalieDetectio,
}) => {
  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const reactiveRealtimeAnormalieContainerStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      display: propDisplay,
    };
  }, [propHeight1, propDisplay]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src={vector}
            style={vectorIconStyle}
          />
        </div>
      </div>
      <div
        className={styles.reactiveRealtimeAnormalieContainer}
        style={reactiveRealtimeAnormalieContainerStyle}
      >
        <p className={styles.reactive}>
          <b>{reactive}</b>
        </p>
        <p className={styles.realtimeAnormalieDetection}>
          {realtimeAnormalieDetectio}
        </p>
      </div>
    </div>
  );
};

export default GroupComponent;
