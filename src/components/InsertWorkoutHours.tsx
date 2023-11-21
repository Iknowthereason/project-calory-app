import { FunctionComponent, memo } from "react";
import styles from "./InsertWorkoutHours.module.css";

const InsertWorkoutHours: FunctionComponent = memo(() => {
  return (
    <div className={styles.insertWorkoutHours}>
      <div className={styles.insertWorkoutHoursChild} />
      <div className={styles.caloriesInput}>
        <div className={styles.caloriesInputChild} />
        <div className={styles.insertTotalHours}>
          Insert total hours of the workout at the selected workout intensity
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

export default InsertWorkoutHours;
