import { FunctionComponent, memo } from "react";
import styles from "./WorkoutLevels.module.css";

const WorkoutLevels: FunctionComponent = memo(() => {
  return (
    <div className={styles.workoutLevels}>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <b className={styles.selectTheLevel}>Select the level</b>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyChild} />
        <div className={styles.option1}>
          <div className={styles.option1Child} />
          <div className={styles.light}>Light</div>
        </div>
        <div className={styles.option2}>
          <div className={styles.option1Child} />
          <div className={styles.medium}>Medium</div>
        </div>
        <div className={styles.option3}>
          <div className={styles.option1Child} />
          <div className={styles.medium}>Hard</div>
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

export default WorkoutLevels;
