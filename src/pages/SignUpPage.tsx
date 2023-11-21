import { FunctionComponent, useState, useCallback } from "react";
import NavigationMenu from "../components/NavigationMenu";
import PortalPopup from "../components/PortalPopup";
import styles from "./SignUpPage.module.css";

const SignUpPage: FunctionComponent = () => {
  const [isNavigationMenuOpen, setNavigationMenuOpen] = useState(false);

  const openNavigationMenu = useCallback(() => {
    setNavigationMenuOpen(true);
  }, []);

  const closeNavigationMenu = useCallback(() => {
    setNavigationMenuOpen(false);
  }, []);

  return (
    <>
      <div className={styles.signUpPage}>
        <div className={styles.headerContainer} />
        <div className={styles.signUpPageChild} />
        <div className={styles.signUp}>Sign Up</div>
        <div className={styles.signUpPageItem} />
        <div className={styles.username}>Username</div>
        <div className={styles.enterUsername}>Enter username</div>
        <div className={styles.signUpPageInner} />
        <div className={styles.email}>Email</div>
        <div className={styles.enterEmail}>Enter email</div>
        <div className={styles.rectangleDiv} />
        <div className={styles.password}>Password</div>
        <div className={styles.enterPassword}>Enter password</div>
        <div className={styles.signUpPageChild1} />
        <div className={styles.confirmPassword}>Confirm password</div>
        <div className={styles.confirmPassword1}>Confirm password</div>
        <div className={styles.signUpPageChild2} />
        <div className={styles.createAccount}>Create Account</div>
        <div className={styles.iconMenu} onClick={openNavigationMenu}>
          <div className={styles.iconMenuChild} />
          <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
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
    </>
  );
};

export default SignUpPage;
