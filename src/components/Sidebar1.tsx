import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar1.module.css";

export type Sidebar1Type = {
  className?: string;
};

const Sidebar1: FunctionComponent<Sidebar1Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.sidebar, className].join(" ")}>
      <div className={styles.sidebarChild} />
      <div className={styles.groupParent}>
        <div className={styles.groupContainer} onClick={onGroupContainerClick}>
          <div className={styles.smartdsvisionParent}>
            <div className={styles.smartdsvision}>SmartDsVision</div>
            <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
          </div>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.icdashboardParent}>
          <img
            className={styles.icdashboardIcon}
            alt=""
            src="/icdashboard.svg"
          />
          <div className={styles.dashboard}>Dashboard</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
          <div className={styles.cameras}>Cameras</div>
        </div>
        <div className={styles.icrecruitmentParent}>
          <img
            className={styles.icrecruitmentIcon}
            alt=""
            src="/icrecruitment1@2x.png"
          />
          <div className={styles.personnel}>Personnel</div>
        </div>
        <div className={styles.icsettingsParent}>
          <img
            className={styles.icsettingsIcon}
            alt=""
            src="/icsettings2.svg"
          />
          <div className={styles.setttings}>Setttings</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar1;
