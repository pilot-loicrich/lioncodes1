import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      onClick={onFrameContainerClick}
    >
      <div className={styles.frameGroup} onClick={onGroupContainerClick}>
        <div className={styles.frameWrapper}>
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/frame@2x.png"
          />
        </div>
        <div className={styles.smartdsvision}>SmartDsVision</div>
      </div>
      <div className={styles.frameChild} />
      <div className={styles.frameContainer}>
        <div className={styles.icdashboardWrapper}>
          <img
            className={styles.icdashboardIcon}
            loading="lazy"
            alt=""
            src="/icdashboard.svg"
          />
        </div>
        <div className={styles.dashboard}>Dashboard</div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper1}>
            <div className={styles.cameraIconWrapper}>
              <img
                className={styles.cameraIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
          <a className={styles.cameras}>Cameras</a>
        </div>
      </div>
      <div className={styles.frameWrapper2}>
        <div className={styles.groupDiv} onClick={onGroupContainerClick1}>
          <div className={styles.icrecruitmentWrapper}>
            <img
              className={styles.icrecruitmentIcon}
              loading="lazy"
              alt=""
              src="/icrecruitment@2x.png"
            />
          </div>
          <div className={styles.personnel}>Personnel</div>
        </div>
      </div>
      <div className={styles.frameWrapper3}>
        <div className={styles.icsettingsParent}>
          <img
            className={styles.icsettingsIcon}
            loading="lazy"
            alt=""
            src="/icsettings.svg"
          />
          <a className={styles.setttings}>Setttings</a>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
