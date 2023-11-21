import { FunctionComponent, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavigationMenu.module.css";

const NavigationMenu: FunctionComponent = memo(() => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/calory-intake");
  }, [navigate]);

  const onCaloryIntakeTextClick = useCallback(() => {
    navigate("/calory-intake");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/calories-calculator");
  }, [navigate]);

  const onExcercisePageTextClick = useCallback(() => {
    navigate("/exercise-page");
  }, [navigate]);

  const onLogOutButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUserInformationButtonClick = useCallback(() => {
    navigate("/user-info-page");
  }, [navigate]);

  const onUserInformationTextClick = useCallback(() => {
    navigate("/user-info-page");
  }, [navigate]);

  return (
    <div className={styles.navigationMenu}>
      <div className={styles.navigationMenuChild} />
      <div className={styles.navigationMenuItem} onClick={onRectangle1Click} />
      <b className={styles.caloryIntake} onClick={onCaloryIntakeTextClick}>
        Calory intake
      </b>
      <div className={styles.navigationMenuInner} onClick={onRectangle2Click} />
      <div className={styles.rectangleDiv} />
      <b className={styles.excercisePage} onClick={onExcercisePageTextClick}>
        Excercise page
      </b>
      <div className={styles.calculator}>Calculator</div>
      <div className={styles.logOutButton} onClick={onLogOutButtonClick}>
        <div className={styles.logOutButtonChild} />
        <div className={styles.logOut}>Log Out</div>
      </div>
      <div
        className={styles.userInformationButton}
        onClick={onUserInformationButtonClick}
      >
        <div className={styles.userInformationButtonChild} />
      </div>
      <div className={styles.headerContainer} />
      <div className={styles.menu}>Menu</div>
      <div className={styles.iconMenu}>
        <div className={styles.iconMenuChild} />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <div
        className={styles.userInformation}
        onClick={onUserInformationTextClick}
      >
        User information
      </div>
    </div>
  );
});

export default NavigationMenu;
