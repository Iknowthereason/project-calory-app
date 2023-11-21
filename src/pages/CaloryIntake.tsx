import { FunctionComponent, useState, useCallback } from "react";
import NavigationMenu from "../components/NavigationMenu";
import PortalPopup from "../components/PortalPopup";
import SelectMealToast from "../components/SelectMealToast";
import InsertCalories from "../components/InsertCalories";
import TotalCaloriesIntakeToast from "../components/TotalCaloriesIntakeToast";
import styles from "./CaloryIntake.module.css";

const CaloryIntake: FunctionComponent = () => {
  const [isNavigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [isSelectMealToastOpen, setSelectMealToastOpen] = useState(false);
  const [isInsertCaloriesOpen, setInsertCaloriesOpen] = useState(false);
  const [isTotalCaloriesIntakeToastOpen, setTotalCaloriesIntakeToastOpen] =
    useState(false);

  const openNavigationMenu = useCallback(() => {
    setNavigationMenuOpen(true);
  }, []);

  const closeNavigationMenu = useCallback(() => {
    setNavigationMenuOpen(false);
  }, []);

  const openSelectMealToast = useCallback(() => {
    setSelectMealToastOpen(true);
  }, []);

  const closeSelectMealToast = useCallback(() => {
    setSelectMealToastOpen(false);
  }, []);

  const openInsertCalories = useCallback(() => {
    setInsertCaloriesOpen(true);
  }, []);

  const closeInsertCalories = useCallback(() => {
    setInsertCaloriesOpen(false);
  }, []);

  const openTotalCaloriesIntakeToast = useCallback(() => {
    setTotalCaloriesIntakeToastOpen(true);
  }, []);

  const closeTotalCaloriesIntakeToast = useCallback(() => {
    setTotalCaloriesIntakeToastOpen(false);
  }, []);

  return (
    <>
      <div className={styles.caloryIntake}>
        <div className={styles.frame}>
          <div className={styles.headerContainer} />
          <div className={styles.frame1}>
            <img
              className={styles.iconMenu}
              alt=""
              src="/-icon-menu.svg"
              onClick={openNavigationMenu}
            />
            <div className={styles.caloryIntake1}>Calory intake</div>
          </div>
        </div>
        <div className={styles.frame2}>
          <div className={styles.frame3}>
            <div className={styles.frame4}>
              <div className={styles.button1}>
                <img
                  className={styles.button1Child}
                  alt=""
                  src="/rectangle-34.svg"
                />
                <div
                  className={styles.selectMealEg}
                  onClick={openSelectMealToast}
                >
                  Select meal (e.g. breakfast)
                </div>
              </div>
              <div className={styles.tipsForAContainer}>
                <p className={styles.tipsForA}>Tips for a good diet:</p>
                <p className={styles.tipsForA}>
                  Remember the food pyramid and the correct plate model etc.
                </p>
              </div>
              <div className={styles.button2}>
                <img
                  className={styles.button2Child}
                  alt=""
                  src="/rectangle-35.svg"
                />
                <div className={styles.putInThe} onClick={openInsertCalories}>
                  Put in the foods calories
                </div>
              </div>
              <div className={styles.logOutButton}>
                <div className={styles.submitCaloryIntake}>
                  Submit calory intake
                </div>
              </div>
              <div className={styles.frame5}>
                <div
                  className={styles.showDaysTotal}
                  onClick={openTotalCaloriesIntakeToast}
                >
                  Show days total calory intake
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frame6}>
            <div className={styles.putInThe1}>Put in the food info</div>
          </div>
        </div>
      </div>
      {isNavigationMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNavigationMenu}
        >
          <NavigationMenu onClose={closeNavigationMenu} />
        </PortalPopup>
      )}
      {isSelectMealToastOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSelectMealToast}
        >
          <SelectMealToast onClose={closeSelectMealToast} />
        </PortalPopup>
      )}
      {isInsertCaloriesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeInsertCalories}
        >
          <InsertCalories onClose={closeInsertCalories} />
        </PortalPopup>
      )}
      {isTotalCaloriesIntakeToastOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTotalCaloriesIntakeToast}
        >
          <TotalCaloriesIntakeToast onClose={closeTotalCaloriesIntakeToast} />
        </PortalPopup>
      )}
    </>
  );
};

export default CaloryIntake;
