import { FunctionComponent, memo } from "react";
import styles from "./WorkoutHours.module.css";

const WorkoutHours: FunctionComponent = memo(() => {
  return (
    <div className={styles.workoutHours}>
      <div className={styles.workoutHoursChild} />
      <div className={styles.youHaveSpent}>
        You have spent 2 hours and 18 minutes working out!
      </div>
      <img className={styles.iconClose} alt="" src="/-icon-close.svg" />
    </div>
  );
});

export default WorkoutHours;
