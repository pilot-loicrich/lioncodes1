import { FunctionComponent } from "react";
import styles from "./ActionButtons.module.css";

export type ActionButtonsType = {
  className?: string;
  updatePersonnelInformatio?: string;
};

const ActionButtons: FunctionComponent<ActionButtonsType> = ({
  className = "",
  updatePersonnelInformatio,
}) => {
  return (
    <div className={[styles.actionButtons, className].join(" ")}>
      <button className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.updatePersonnelInformations}>
          {updatePersonnelInformatio}
        </div>
      </button>
      <button className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.createNewPersonnel}>Create new personnel</div>
      </button>
    </div>
  );
};

export default ActionButtons;
