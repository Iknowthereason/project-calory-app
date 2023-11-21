import { FunctionComponent, useState, useCallback } from "react";
import NavigationMenu from "../components/NavigationMenu";
import PortalPopup from "../components/PortalPopup";
import styles from "./UserInfoPage.module.css";

const UserInfoPage: FunctionComponent = () => {
  const [isNavigationMenuOpen, setNavigationMenuOpen] = useState(false);

  const openNavigationMenu = useCallback(() => {
    setNavigationMenuOpen(true);
  }, []);

  const closeNavigationMenu = useCallback(() => {
    setNavigationMenuOpen(false);
  }, []);

  return (
    <>
      <div className={styles.userInfoPage}>
        <div className={styles.header}>
          <div className={styles.headerContainer} />
          <div className={styles.iconMenu} onClick={openNavigationMenu}>
            <div className={styles.iconMenuChild} />
            <img className={styles.iconMenu1} alt="" src="/-icon-menu2.svg" />
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.bodyContainer} />
          <div className={styles.container}>
            <div className={styles.containerBox} />
            <div className={styles.ageInput}>
              <div className={styles.ageInputChild} />
              <div className={styles.enterAge}> Enter Age</div>
              <div className={styles.age}>Age</div>
            </div>
            <div className={styles.ageInput}>
              <div className={styles.ageInputChild} />
              <div className={styles.enterAge}> Enter Age</div>
              <div className={styles.age}>Age</div>
            </div>
            <div className={styles.heightInput}>
              <div className={styles.heightInputChild} />
              <div className={styles.enterHeight}> Enter Height</div>
              <div className={styles.age}>Height</div>
            </div>
            <div className={styles.weightInput}>
              <div className={styles.weightInputChild} />
              <div className={styles.enterWeight}> Enter Weight</div>
              <div className={styles.weight}>Weight</div>
            </div>
            <div className={styles.activityLevelInput}>
              <div className={styles.doYouHave}>
                Do you have any medical problems?
              </div>
              <div className={styles.noOption}>
                <div className={styles.noOptionChild} />
                <div className={styles.no}>No</div>
              </div>
              <div className={styles.yesOption}>
                <div className={styles.noOptionChild} />
                <div className={styles.no}>Yes</div>
              </div>
            </div>
            <div className={styles.activityLevelInput1}>
              <div className={styles.lowButton}>
                <div className={styles.lowButtonChild} />
                <div className={styles.low}>Low</div>
              </div>
              <div className={styles.mediumButton}>
                <div className={styles.mediumButtonChild} />
                <div className={styles.medium}>Medium</div>
              </div>
              <div className={styles.highButton}>
                <div className={styles.highButtonChild} />
                <div className={styles.high}>High</div>
              </div>
              <div className={styles.selectActivityLevel}>
                Select activity level
              </div>
            </div>
          </div>
          <div className={styles.userInformation}>
            Please fill in the user information
          </div>
          <div className={styles.unitsSelector}>
            <div className={styles.unitsSelectorChild} />
            <div className={styles.unitsSelectorItem} />
            <div className={styles.imperial}>Imperial</div>
            <div className={styles.metric}>Metric</div>
          </div>
        </div>
        <div className={styles.userInformation1}>User Information</div>
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
    </>
  );
};

export default UserInfoPage;
