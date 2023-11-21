import { FunctionComponent, memo } from "react";
import styles from "./SelectMealToast.module.css";

const SelectMealToast: FunctionComponent = memo(() => {
  return (
    <div className={styles.selectMealToast}>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <b className={styles.selectTheMeal}>Select the meal</b>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyChild} />
        <div className={styles.option1}>
          <div className={styles.option1Child} />
          <div className={styles.breakfast}>Breakfast</div>
        </div>
        <div className={styles.option2}>
          <div className={styles.option1Child} />
          <div className={styles.lunch}>Lunch</div>
        </div>
        <div className={styles.option3}>
          <div className={styles.option1Child} />
          <div className={styles.lunch}>Snack</div>
        </div>
        <div className={styles.option4}>
          <div className={styles.option1Child} />
          <div className={styles.lunch}>Dinner</div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.cancel}>CANCEL</div>
        <div className={styles.ok}>OK</div>
      </div>
    </div>
  );
});

export default SelectMealToast;
