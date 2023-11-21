import { FunctionComponent, memo } from "react";
import styles from "./TotalCaloriesIntakeToast.module.css";

const TotalCaloriesIntakeToast: FunctionComponent = memo(() => {
  return (
    <div className={styles.totalCaloriesIntakeToast}>
      <div className={styles.totalCaloriesIntakeToastChild} />
      <div className={styles.youHaveTakenContainer}>
        <span className={styles.youHaveTakenContainer1}>
          <p className={styles.youHaveTaken}>You have taken</p>
          <p className={styles.youHaveTaken}>1280 calories today!</p>
        </span>
      </div>
      <img className={styles.iconClose} alt="" src="/-icon-close.svg" />
    </div>
  );
});

export default TotalCaloriesIntakeToast;
