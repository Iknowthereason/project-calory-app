import { FunctionComponent, memo } from "react";
import styles from "./SubmittedWorkout.module.css";

const SubmittedWorkout: FunctionComponent = memo(() => {
  return (
    <div className={styles.submittedWorkout}>
      <div className={styles.submittedWorkoutChild} />
      <div className={styles.youHaveSubmitted}>
        You have submitted 2 hours of Medium workout!
      </div>
      <img className={styles.iconClose} alt="" src="/-icon-close.svg" />
    </div>
  );
});

export default SubmittedWorkout;
