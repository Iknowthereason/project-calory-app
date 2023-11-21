import { FunctionComponent, memo } from "react";
import styles from "./RecommendedFoodType.module.css";

const RecommendedFoodType: FunctionComponent = memo(() => {
  return (
    <div className={styles.recommendedFoodType}>
      <div className={styles.recommendedFoodTypeChild} />
      <div className={styles.todaysRecommendedFood}>
        Today’s recommended food type is chicken breast.
      </div>
      <img className={styles.iconClose} alt="" src="/-icon-close.svg" />
    </div>
  );
});

export default RecommendedFoodType;
