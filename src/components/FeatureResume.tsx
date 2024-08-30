import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import styles from "./FeatureResume.module.css";

export type FeatureResumeType = {
  className?: string;
};

const FeatureResume: FunctionComponent<FeatureResumeType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.featureResume, className].join(" ")}>
      <div className={styles.featureRowParent}>
        <div className={styles.featureRow}>
          <div className={styles.featureItem}>
            <div className={styles.featureItemChild} />
            <img
              className={styles.featureIcon}
              loading="lazy"
              alt=""
              src="/vector2.svg"
            />
          </div>
        </div>
        <div className={styles.realTimeDetectionInstantlyContainer}>
          <p className={styles.realTimeDetection}>
            <b>Real-Time Detection</b>
          </p>
          <p
            className={styles.instantlyDetectAnd}
          >{`Instantly detect and recognize `}</p>
          <p className={styles.instantlyDetectAnd}>
            employees as they enter and exit.
          </p>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.featureRow}>
          <div className={styles.rectangleParent}>
            <div className={styles.featureItemChild} />
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
        </div>
        <div className={styles.detailedActivityTrackingContainer}>
          <p className={styles.instantlyDetectAnd}>
            <b>Detailed Activity Tracking</b>
          </p>
          <p className={styles.monitorEmployeeActivity}>
            Monitor employee activity and productivity with detailed logs and
            reports.
          </p>
        </div>
      </div>
      <GroupComponent
        vector="/vector-13.svg"
        reactive="Reactive"
        realtimeAnormalieDetectio="Realtime Anormalie detection and notification in Crown"
      />
      <GroupComponent
        vector="/vector-23.svg"
        propHeight="34.2px"
        propHeight1="86px"
        propDisplay="inline-block"
        reactive="Secure and Reliable"
        realtimeAnormalieDetectio="Ensure data security and reliability with state-of-the-art technology."
      />
    </div>
  );
};

export default FeatureResume;
