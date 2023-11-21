import { FunctionComponent, useState, useCallback } from "react";
import WorkoutLevels from "../components/WorkoutLevels";
import PortalPopup from "../components/PortalPopup";
import WorkoutHours from "../components/WorkoutHours";
import RecommendedExercise from "../components/RecommendedExercise";
import RecommendedFoodType from "../components/RecommendedFoodType";
import NavigationMenu from "../components/NavigationMenu";
import SubmittedWorkout from "../components/SubmittedWorkout";
import styles from "./ExercisePage.module.css";

const ExercisePage: FunctionComponent = () => {
  const [isWorkoutLevelsOpen, setWorkoutLevelsOpen] = useState(false);
  const [isWorkoutHoursOpen, setWorkoutHoursOpen] = useState(false);
  const [isRecommendedExerciseOpen, setRecommendedExerciseOpen] =
    useState(false);
  const [isRecommendedFoodTypeOpen, setRecommendedFoodTypeOpen] =
    useState(false);
  const [isNavigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [isSubmittedWorkoutOpen, setSubmittedWorkoutOpen] = useState(false);

  const openWorkoutLevels = useCallback(() => {
    setWorkoutLevelsOpen(true);
  }, []);

  const closeWorkoutLevels = useCallback(() => {
    setWorkoutLevelsOpen(false);
  }, []);

  const openWorkoutHours = useCallback(() => {
    setWorkoutHoursOpen(true);
  }, []);

  const closeWorkoutHours = useCallback(() => {
    setWorkoutHoursOpen(false);
  }, []);

  const openRecommendedExercise = useCallback(() => {
    setRecommendedExerciseOpen(true);
  }, []);

  const closeRecommendedExercise = useCallback(() => {
    setRecommendedExerciseOpen(false);
  }, []);

  const openRecommendedFoodType = useCallback(() => {
    setRecommendedFoodTypeOpen(true);
  }, []);

  const closeRecommendedFoodType = useCallback(() => {
    setRecommendedFoodTypeOpen(false);
  }, []);

  const openNavigationMenu = useCallback(() => {
    setNavigationMenuOpen(true);
  }, []);

  const closeNavigationMenu = useCallback(() => {
    setNavigationMenuOpen(false);
  }, []);

  const openSubmittedWorkout = useCallback(() => {
    setSubmittedWorkoutOpen(true);
  }, []);

  const closeSubmittedWorkout = useCallback(() => {
    setSubmittedWorkoutOpen(false);
  }, []);

  return (
    <>
      <div className={styles.exercisePage}>
        <div className={styles.headerContainer} />
        <div className={styles.exercisePageChild} />
        <div className={styles.exercisePage1}>Exercise page</div>
        <div className={styles.exercisePageItem} onClick={openWorkoutLevels} />
        <div className={styles.workoutLevels}>Workout levels</div>
        <div className={styles.exercisePageInner} onClick={openWorkoutHours} />
        <div className={styles.workoutHours}>Workout hours</div>
        <div
          className={styles.rectangleDiv}
          onClick={openRecommendedExercise}
        />
        <div className={styles.recommendedExercise}>Recommended exercise</div>
        <div
          className={styles.exercisePageChild1}
          onClick={openRecommendedFoodType}
        />
        <div className={styles.foodType}>Food type</div>
        <div className={styles.userInformation}>
          Workout levels varies from Light, Medium and Hard
        </div>
        <div className={styles.userInformationContainer}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            “A warrior is a guy that goes, I’m here again today. I’ll be here
            again tomorrow and the next day. It’s a person who puts no limit on
            what’s possible.”
          </p>
        </div>
        <div className={styles.userInformationContainer1}>
          <p className={styles.blankLine}>Quote of the day:</p>
        </div>
        <img
          className={styles.iconMenu}
          alt=""
          src="/-icon-menu1.svg"
          onClick={openNavigationMenu}
        />
        <div className={styles.logOutButton} onClick={openSubmittedWorkout}>
          <div className={styles.logOutButtonChild} />
          <div className={styles.submitWorkout}>Submit workout</div>
        </div>
      </div>
      {isWorkoutLevelsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWorkoutLevels}
        >
          <WorkoutLevels onClose={closeWorkoutLevels} />
        </PortalPopup>
      )}
      {isWorkoutHoursOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWorkoutHours}
        >
          <WorkoutHours onClose={closeWorkoutHours} />
        </PortalPopup>
      )}
      {isRecommendedExerciseOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRecommendedExercise}
        >
          <RecommendedExercise onClose={closeRecommendedExercise} />
        </PortalPopup>
      )}
      {isRecommendedFoodTypeOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRecommendedFoodType}
        >
          <RecommendedFoodType onClose={closeRecommendedFoodType} />
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
      {isSubmittedWorkoutOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSubmittedWorkout}
        >
          <SubmittedWorkout onClose={closeSubmittedWorkout} />
        </PortalPopup>
      )}
    </>
  );
};

export default ExercisePage;
