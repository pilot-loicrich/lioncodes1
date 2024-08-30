import { FunctionComponent } from "react";
import Sidebar1 from "../components/Sidebar1";
import CamerasHeader from "../components/CamerasHeader";
import styles from "./Dashboard3.module.css";

export type Dashboard3Type = {
  className?: string;
};

const Dashboard3: FunctionComponent<Dashboard3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.dashboard, className].join(" ")}>
      <div className={styles.backgroundImage} />
      <Sidebar1 />
      <div className={styles.settings}>Settings</div>
      <div className={styles.dashboardChild} />
      <div className={styles.dashboardInner}>
        <div className={styles.subtractParent}>
          <img className={styles.subtractIcon} alt="" src="/subtract1.svg" />
          <div className={styles.groupWrapper}>
            <div className={styles.camerasParent}>
              <div className={styles.cameras}>Cameras</div>
              <div className={styles.div}>06</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.emailParent}>
        <div className={styles.email}>
          <div className={styles.name}>
            <span>Name</span>
            <span className={styles.span}>*</span>
          </div>
          <div className={styles.largeInput}>
            <div className={styles.background}>
              <div className={styles.backgroundChild} />
            </div>
            <div className={styles.text}>
              <div className={styles.west}>Camera #7</div>
            </div>
          </div>
        </div>
        <div className={styles.email}>
          <div className={styles.name}>
            <span>Sector</span>
            <span className={styles.span}>*</span>
          </div>
          <div className={styles.largeInput}>
            <div className={styles.background}>
              <div className={styles.backgroundChild} />
            </div>
            <div className={styles.text1}>
              <div className={styles.west}>West</div>
            </div>
          </div>
        </div>
        <div className={styles.email}>
          <div className={styles.name}>
            <span>Department</span>
            <span className={styles.span}>*</span>
          </div>
          <div className={styles.largeInput}>
            <div className={styles.background}>
              <div className={styles.backgroundChild} />
            </div>
            <div className={styles.text2}>
              <div className={styles.west}>Administration</div>
            </div>
          </div>
        </div>
        <div className={styles.email3}>
          <div className={styles.videoQuality}>
            <span>Video quality</span>
            <span className={styles.span}>*</span>
          </div>
          <div className={styles.largeInput3}>
            <div className={styles.background}>
              <div className={styles.backgroundChild} />
            </div>
            <div className={styles.text3}>
              <div className={styles.west}>3GP</div>
            </div>
          </div>
        </div>
        <div className={styles.email3}>
          <div className={styles.videoQuality}>
            <span>ips</span>
            <span className={styles.span}>*</span>
          </div>
          <div className={styles.largeInput3}>
            <div className={styles.background}>
              <div className={styles.backgroundChild} />
            </div>
            <div className={styles.text4}>
              <div className={styles.west}>10</div>
            </div>
          </div>
        </div>
        <div className={styles.email}>
          <div className={styles.name}>
            <span>Compression mode</span>
            <span className={styles.span}>*</span>
          </div>
          <div className={styles.largeInput}>
            <div className={styles.background}>
              <div className={styles.backgroundChild} />
            </div>
            <div className={styles.text5}>
              <div className={styles.west}>x H.256</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.createNewPersonnel}>Create new personnel</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.createNewPersonnel}>
          Update camera informations
        </div>
      </div>
      <CamerasHeader
        propBackgroundColor="#000"
        propBorder="2px solid #ff5151"
        propMinHeight="unset"
      />
      <CamerasHeader
        propBackgroundColor="unset"
        propBorder="1px solid #fff"
        propMinHeight="unset"
      />
      <CamerasHeader
        propBackgroundColor="unset"
        propBorder="1px solid #fff"
        propMinHeight="unset"
      />
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
      </div>
    </div>
  );
};

export default Dashboard3;
