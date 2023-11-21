import { FunctionComponent, memo } from "react";
import styles from "./SubmittedCalories.module.css";

const SubmittedCalories: FunctionComponent = memo(() => {
  return (
    <div className={styles.submittedCalories}>
      <div className={styles.submittedCaloriesChild} />
      <div className={styles.youHaveSubmitted}>
        You have submitted a breakfast of 500 calories!
      </div>
      <img className={styles.iconClose} alt="" src="/-icon-close.svg" />
    </div>
  );
});

export default SubmittedCalories;
