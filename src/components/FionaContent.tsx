import { FunctionComponent } from "react";
import ActionButtons from "./ActionButtons";
import styles from "./FionaContent.module.css";

export type FionaContentType = {
  className?: string;
};

const FionaContent: FunctionComponent<FionaContentType> = ({
  className = "",
}) => {
  return (
    <form className={[styles.fionaContent, className].join(" ")}>
      <div className={styles.layout}>
        <div className={styles.frameParent}>
          <div className={styles.maskGroupWrapper}>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group-20@2x.png"
            />
          </div>
          <h3 className={styles.fionaGreavesm}>Fiona Greavesm</h3>
        </div>
      </div>
      <div className={styles.layout1}>
        <div className={styles.fionaInfo}>
          <div className={styles.infoHeaders}>
            <div className={styles.name}>
              <span className={styles.dateOfBirth}>Name</span>
              <span className={styles.span}>*</span>
            </div>
            <div className={styles.background}>
              <div className={styles.backgroundChild} />
              <input
                className={styles.fionaGreavesm1}
                placeholder="Fiona Greavesm"
                type="text"
              />
            </div>
          </div>
          <div className={styles.dateOfBirthParent}>
            <div className={styles.dateOfBirthContainer}>
              <span className={styles.dateOfBirth}>Date of birth</span>
              <span className={styles.span}>*</span>
            </div>
            <div className={styles.background1}>
              <div className={styles.backgroundChild} />
              <div className={styles.jan1996Wrapper}>
                <div className={styles.jan1996}>12 Jan 1996</div>
              </div>
              <img className={styles.calendarIcon} alt="" src="/vector-2.svg" />
            </div>
          </div>
          <div className={styles.infoHeaders}>
            <div className={styles.post}>
              <span className={styles.dateOfBirth}>Post</span>
              <span className={styles.span}>*</span>
            </div>
            <div className={styles.background}>
              <div className={styles.backgroundChild} />
              <input
                className={styles.salesAndMarketist}
                placeholder="Sales and marketist"
                type="text"
              />
            </div>
          </div>
          <div className={styles.infoHeaders}>
            <div className={styles.department}>
              <span className={styles.dateOfBirth}>Department</span>
              <span className={styles.span}>*</span>
            </div>
            <div className={styles.background}>
              <div className={styles.backgroundChild} />
              <input
                className={styles.economics}
                placeholder="Economics"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <ActionButtons updatePersonnelInformatio="Update personnel informations" />
    </form>
  );
};

export default FionaContent;
