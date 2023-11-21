import { FunctionComponent, useState, useCallback } from "react";
import TotalCaloriesIntakeToast from "../components/TotalCaloriesIntakeToast";
import PortalPopup from "../components/PortalPopup";
import IntakeConsumtionDifference from "../components/IntakeConsumtionDifference";
import BurnedCaloriesToast from "../components/BurnedCaloriesToast";
import NavigationMenu from "../components/NavigationMenu";
import styles from "./CaloriesCalculator.module.css";

const CaloriesCalculator: FunctionComponent = () => {
  const [isTotalCaloriesIntakeToastOpen, setTotalCaloriesIntakeToastOpen] =
    useState(false);
  const [isIntakeConsumtionDifferenceOpen, setIntakeConsumtionDifferenceOpen] =
    useState(false);
  const [isBurnedCaloriesToastOpen, setBurnedCaloriesToastOpen] =
    useState(false);
  const [isNavigationMenuOpen, setNavigationMenuOpen] = useState(false);

  const openTotalCaloriesIntakeToast = useCallback(() => {
    setTotalCaloriesIntakeToastOpen(true);
  }, []);

  const closeTotalCaloriesIntakeToast = useCallback(() => {
    setTotalCaloriesIntakeToastOpen(false);
  }, []);

  const openIntakeConsumtionDifference = useCallback(() => {
    setIntakeConsumtionDifferenceOpen(true);
  }, []);

  const closeIntakeConsumtionDifference = useCallback(() => {
    setIntakeConsumtionDifferenceOpen(false);
  }, []);

  const openBurnedCaloriesToast = useCallback(() => {
    setBurnedCaloriesToastOpen(true);
  }, []);

  const closeBurnedCaloriesToast = useCallback(() => {
    setBurnedCaloriesToastOpen(false);
  }, []);

  const openNavigationMenu = useCallback(() => {
    setNavigationMenuOpen(true);
  }, []);

  const closeNavigationMenu = useCallback(() => {
    setNavigationMenuOpen(false);
  }, []);

  return (
    <>
      <div className={styles.caloriesCalculator}>
        <div className={styles.headerContainer} />
        <div className={styles.caloriesCalculatorChild} />
        <div className={styles.calculator}>Calculator</div>
        <div className={styles.showCaloriesIntakeButton}>
          <div className={styles.showCaloriesIntakeButtonChild} />
          <div
            className={styles.showDaysTotal}
            onClick={openTotalCaloriesIntakeToast}
          >
            Show days total calories intake
          </div>
        </div>
        <div
          className={styles.intakeConsumptiopionDifferen}
          onClick={openIntakeConsumtionDifference}
        >
          <div className={styles.intakeConsumptiopionDifferenChild} />
          <b className={styles.intakeConsumption}>
            Intake - consumption difference
          </b>
          <img className={styles.iconClose} alt="" src="/-icon-close1.svg" />
        </div>
        <div
          className={styles.showBurnedCaloriesButton}
          onClick={openBurnedCaloriesToast}
        >
          <div className={styles.showCaloriesIntakeButtonChild} />
          <div className={styles.showBurnedCalories}>
            Show burned calories amount
          </div>
        </div>
        <div className={styles.userInformation}>Calculate your calories</div>
        <div className={styles.iconMenu} onClick={openNavigationMenu}>
          <div className={styles.iconMenuChild} />
          <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
        </div>
      </div>
      {isTotalCaloriesIntakeToastOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTotalCaloriesIntakeToast}
        >
          <TotalCaloriesIntakeToast onClose={closeTotalCaloriesIntakeToast} />
        </PortalPopup>
      )}
      {isIntakeConsumtionDifferenceOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeIntakeConsumtionDifference}
        >
          <IntakeConsumtionDifference
            onClose={closeIntakeConsumtionDifference}
          />
        </PortalPopup>
      )}
      {isBurnedCaloriesToastOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBurnedCaloriesToast}
        >
          <BurnedCaloriesToast onClose={closeBurnedCaloriesToast} />
        </PortalPopup>
      )}
      {isNavigationMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNavigationMenu}
        >
          <NavigationMenu onClose={closeNavigationMenu} />
        </PortalPopup>
      )}
    </>
  );
};

export default CaloriesCalculator;
