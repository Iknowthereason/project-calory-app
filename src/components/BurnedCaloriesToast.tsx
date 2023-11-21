import { FunctionComponent, memo } from "react";
import styles from "./BurnedCaloriesToast.module.css";

const BurnedCaloriesToast: FunctionComponent = memo(() => {
  return (
    <div className={styles.burnedCaloriesToast}>
      <div className={styles.burnedCaloriesToastChild} />
      <div className={styles.youHaveBurned}>
        You have burned approximately 1500 calories today!
      </div>
      <img className={styles.iconClose} alt="" src="/-icon-close.svg" />
    </div>
  );
});

export default BurnedCaloriesToast;
