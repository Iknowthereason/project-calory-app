import { FunctionComponent, memo } from "react";
import styles from "./InsertCalories.module.css";

const InsertCalories: FunctionComponent = memo(() => {
  return (
    <div className={styles.insertCalories}>
      <div className={styles.insertCaloriesChild} />
      <div className={styles.caloriesInput}>
        <div className={styles.caloriesInputChild} />
        <div className={styles.insertTotalAmount}>
          Insert total amount of calories in the meal
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.cancel}>CANCEL</div>
        <div className={styles.ok}>OK</div>
      </div>
      <img className={styles.iconClose} alt="" src="/-icon-close.svg" />
    </div>
  );
});

export default InsertCalories;
