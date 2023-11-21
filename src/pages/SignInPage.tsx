import { FunctionComponent, useState, useCallback } from "react";
import NavigationMenu from "../components/NavigationMenu";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./SignInPage.module.css";

const SignInPage: FunctionComponent = () => {
  const [isNavigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const navigate = useNavigate();

  const onSignUpTextClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  const openNavigationMenu = useCallback(() => {
    setNavigationMenuOpen(true);
  }, []);

  const closeNavigationMenu = useCallback(() => {
    setNavigationMenuOpen(false);
  }, []);

  return (
    <>
      <div className={styles.signInPage}>
        <div className={styles.headerContainer} />
        <div className={styles.signInPageChild} />
        <div className={styles.signIn}>Sign in</div>
        <div className={styles.signInPageItem} />
        <div className={styles.username}>Username</div>
        <b className={styles.signUp} onClick={onSignUpTextClick}>
          Sign-Up
        </b>
        <b className={styles.welcomeBack}>Welcome Back!</b>
        <div className={styles.dontHaveAn}>Don't have an account?</div>
        <div className={styles.enterUsername}>Enter username</div>
        <div className={styles.signInPageInner} />
        <div className={styles.password}>Password</div>
        <div className={styles.enterPassword}>Enter password</div>
        <div className={styles.rectangleDiv} />
        <div className={styles.login}>Login</div>
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

export default SignInPage;
