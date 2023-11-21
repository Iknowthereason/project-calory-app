import { FunctionComponent, memo } from "react";
import styles from "./RecommendedExercise.module.css";

const RecommendedExercise: FunctionComponent = memo(() => {
  return (
    <div className={styles.recommendedExercise}>
      <div className={styles.recommendedExerciseChild} />
      <div className={styles.todaysRecommendedExercise}>
        Today’s recommended exercise is 2km jog and free weighs.
      </div>
      <img className={styles.iconClose} alt="" src="/-icon-close.svg" />
    </div>
  );
});

export default RecommendedExercise;
