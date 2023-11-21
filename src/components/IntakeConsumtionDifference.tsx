import { FunctionComponent, memo } from "react";
import styles from "./IntakeConsumtionDifference.module.css";

const IntakeConsumtionDifference: FunctionComponent = memo(() => {
  return (
    <div className={styles.intakeConsumtionDifference}>
      <div className={styles.intakeConsumtionDifferenceChild} />
      <div className={styles.totalIntakeConsumptionContainer}>
        <span className={styles.totalIntakeConsumptionContainer1}>
          <p className={styles.totalIntakeConsumption}>
            Total intake consumption difference today:
          </p>
          <p className={styles.totalIntakeConsumption}>220 kcal</p>
        </span>
      </div>
      <img className={styles.iconClose} alt="" src="/-icon-close.svg" />
    </div>
  );
});

export default IntakeConsumtionDifference;
