import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PersonnelCardList.module.css";

export type PersonnelCardListType = {
  className?: string;
  maskGroup?: string;
  fabriceMoukete?: string;
  maskGroup1?: string;
  maskGroup2?: string;
  maskGroup3?: string;
  maskGroup4?: string;
  maskGroup5?: string;
  maskGroup6?: string;
  maskGroup7?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propAlignSelf3?: CSSProperties["alignSelf"];
  propAlignSelf4?: CSSProperties["alignSelf"];
  propAlignSelf5?: CSSProperties["alignSelf"];
  propAlignSelf6?: CSSProperties["alignSelf"];
  propAlignSelf7?: CSSProperties["alignSelf"];
};

const PersonnelCardList: FunctionComponent<PersonnelCardListType> = ({
  className = "",
  propFlex,
  propAlignSelf,
  maskGroup,
  fabriceMoukete,
  propAlignSelf1,
  maskGroup1,
  propAlignSelf2,
  maskGroup2,
  propAlignSelf3,
  maskGroup3,
  propAlignSelf4,
  maskGroup4,
  propAlignSelf5,
  maskGroup5,
  propAlignSelf6,
  maskGroup6,
  propAlignSelf7,
  maskGroup7,
}) => {
  const personnelCardListStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const personnelCardListContentStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const personnelCardListContent1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const personnelCardListContent2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
    };
  }, [propAlignSelf2]);

  const personnelCardListContent3Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf3,
    };
  }, [propAlignSelf3]);

  const personnelCardListContent4Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf4,
    };
  }, [propAlignSelf4]);

  const personnelCardListContent5Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf5,
    };
  }, [propAlignSelf5]);

  const personnelCardListContent6Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf6,
    };
  }, [propAlignSelf6]);

  const personnelCardListContent7Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf7,
    };
  }, [propAlignSelf7]);

  return (
    <div
      className={[styles.personnelCardList, className].join(" ")}
      style={personnelCardListStyle}
    >
      <div
        className={styles.personnelCardListContent}
        style={personnelCardListContentStyle}
      >
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src={maskGroup}
        />
        <div className={styles.personnelCardDetails}>
          <div className={styles.fabriceMoukete}>{fabriceMoukete}</div>
        </div>
      </div>
      <div
        className={styles.personnelCardListContent}
        style={personnelCardListContent1Style}
      >
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src={maskGroup1}
        />
        <div className={styles.personnelCardDetails}>
          <div className={styles.fabriceMoukete}>Fabrice Moukete</div>
        </div>
      </div>
      <div
        className={styles.personnelCardListContent2}
        style={personnelCardListContent2Style}
      >
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src={maskGroup2}
        />
        <div className={styles.fabriceMouketeContainer}>
          <div className={styles.fabriceMoukete}>Fabrice Moukete</div>
        </div>
      </div>
      <div
        className={styles.personnelCardListContent2}
        style={personnelCardListContent3Style}
      >
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src={maskGroup3}
        />
        <div className={styles.fabriceMouketeContainer}>
          <div className={styles.fabriceMoukete}>Fabrice Moukete</div>
        </div>
      </div>
      <div
        className={styles.personnelCardListContent}
        style={personnelCardListContent4Style}
      >
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src={maskGroup4}
        />
        <div className={styles.personnelCardDetails}>
          <div className={styles.fabriceMoukete}>Fabrice Moukete</div>
        </div>
      </div>
      <div
        className={styles.personnelCardListContent}
        style={personnelCardListContent5Style}
      >
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src={maskGroup5}
        />
        <div className={styles.fabriceMouketeContainer}>
          <div className={styles.fabriceMoukete}>Fabrice Moukete</div>
        </div>
      </div>
      <div
        className={styles.personnelCardListContent2}
        style={personnelCardListContent6Style}
      >
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src={maskGroup6}
        />
        <div className={styles.fabriceMouketeContainer}>
          <div className={styles.fabriceMoukete}>Fabrice Moukete</div>
        </div>
      </div>
      <div
        className={styles.personnelCardListContent}
        style={personnelCardListContent7Style}
      >
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src={maskGroup7}
        />
        <div className={styles.personnelCardDetails}>
          <div className={styles.fabriceMoukete}>Fabrice Moukete</div>
        </div>
      </div>
    </div>
  );
};

export default PersonnelCardList;
