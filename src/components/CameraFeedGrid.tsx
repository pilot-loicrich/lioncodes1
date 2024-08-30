import { FunctionComponent } from "react";
import GroupComponent1 from "./GroupComponent1";
import GroupComponent2 from "./GroupComponent2";
import GroupComponent3 from "./GroupComponent3";
import styles from "./CameraFeedGrid.module.css";

export type CameraFeedGridType = {
  className?: string;
};

const CameraFeedGrid: FunctionComponent<CameraFeedGridType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.cameraFeedGrid, className].join(" ")}>
      <GroupComponent1
        rectangle63="/rectangle-631@2x.png"
        camera1="Camera #1"
        cameraFeedPlaceholderItem="05"
      />
      <GroupComponent1
        propBackgroundImage="url('/rectangle-632@2x.png')"
        rectangle63="/rectangle-632@2x.png"
        propWidth="106.1px"
        camera1="Camera #2"
        cameraFeedPlaceholderItem="00"
      />
      <GroupComponent2
        rectangle63="/rectangle-633@2x.png"
        camera3="Camera #3"
        prop="02"
        prop1="02"
      />
      <GroupComponent2
        propBackgroundImage="url('/rectangle-634@2x.png')"
        rectangle63="/rectangle-634@2x.png"
        camera3="Camera #4"
        prop="00"
        prop1="00"
      />
      <GroupComponent3
        rectangle63="/rectangle-635@2x.png"
        camera5="Camera #5"
        prop="46"
        prop1="10"
        prop2="15"
      />
      <GroupComponent3
        propBackgroundImage="url('/rectangle-636@2x.png')"
        rectangle63="/rectangle-636@2x.png"
        camera5="Camera #6"
        prop="12"
        propMinWidth="14px"
        prop1="00"
        propMinWidth1="19px"
        prop2="12"
      />
    </div>
  );
};

export default CameraFeedGrid;
