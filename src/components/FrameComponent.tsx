import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.sidebarInner, className].join(" ")}>
      <div
        className={styles.smartDsVisionContainerParent}
        onClick={onGroupContainerClick}
      >
        <div className={styles.smartDsVisionContainer}>
          <img
            className={styles.smartDsVisionInner}
            loading="lazy"
            alt=""
            src="/frame@2x.png"
          />
        </div>
        <div className={styles.smartdsvision}>SmartDsVision</div>
        <div className={styles.frameChild} />
      </div>
    </div>
  );
};

export default FrameComponent;
