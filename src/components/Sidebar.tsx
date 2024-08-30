import { FunctionComponent, useCallback } from "react";
import FrameComponent from "./FrameComponent";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";

export type SidebarType = {
  className?: string;
};

const Sidebar: FunctionComponent<SidebarType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onIcdashboardIconClick = useCallback(() => {
    navigate("/dashboard3");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/dashboard1");
  }, [navigate]);

  const onGroupContainerClick2 = useCallback(() => {
    navigate("/dashboard2");
  }, [navigate]);

  return (
    <div className={[styles.sidebar, className].join(" ")}>
      <FrameComponent />
      <div className={styles.dashboardMenuItemParent}>
        <div className={styles.dashboardMenuItem}>
          <img
            className={styles.icdashboardIcon}
            loading="lazy"
            alt=""
            src="/icdashboard2.svg"
            onClick={onIcdashboardIconClick}
          />
        </div>
        <a className={styles.dashboard}>Dashboard</a>
      </div>
      <div className={styles.camerasMenuItemWrapper}>
        <div className={styles.camerasMenuItem}>
          <div className={styles.camerasMenuContainer}>
            <div className={styles.camerasMenuInner}>
              <div className={styles.camerasMenuInnerInner}>
                <div
                  className={styles.camerasMenuIconContainerParent}
                  onClick={onGroupContainerClick}
                >
                  <div className={styles.camerasMenuIconContainer}>
                    <div className={styles.healthProfessionalTeamamico}>
                      <img
                        className={styles.camerasMenuIcon}
                        loading="lazy"
                        alt=""
                        src="/vector1.svg"
                      />
                    </div>
                  </div>
                  <a className={styles.cameras}>Cameras</a>
                </div>
              </div>
              <div
                className={styles.personnelMenuItemParent}
                onClick={onGroupContainerClick1}
              >
                <div className={styles.personnelMenuItem}>
                  <img
                    className={styles.icrecruitmentIcon}
                    loading="lazy"
                    alt=""
                    src="/icrecruitment1@2x.png"
                  />
                </div>
                <div className={styles.personnel}>Personnel</div>
              </div>
              <div className={styles.camerasMenuInnerChild}>
                <div
                  className={styles.icsettingsParent}
                  onClick={onGroupContainerClick2}
                >
                  <img
                    className={styles.icsettingsIcon}
                    loading="lazy"
                    alt=""
                    src="/icsettings1.svg"
                  />
                  <a className={styles.setttings}>Setttings</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sidebarBackground} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
