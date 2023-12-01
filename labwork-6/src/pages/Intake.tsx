import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonLabel,
  IonButton,
  IonCardContent,
  IonItem,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonButtons,
  IonMenuButton,
} from '@ionic/react';
import { IIntakeProps } from "../interfaces/interfaces";

export interface Meal {
  id: number;
  mealTime: string;
  calories: number;
}

const Intake: React.FC<IIntakeProps> = ({ setCaloryIntake }) => {
  const [mealTime, setMealTime] = useState<string>('');
  const [calories, setCalories] = useState<number | undefined>();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [totalIntake, setTotalCalories] = useState<number>(0);

  const handleFormSubmit = () => {
    if (mealTime && calories !== undefined) {
      const newMeal: Meal = {
        id: Date.now(),
        mealTime,
        calories,
      };

      setMeals((prevMeals) => [...prevMeals, newMeal]);
      setTotalCalories((prevTotalCalories) => prevTotalCalories + (calories || 0));
      setCaloryIntake((prevCaloryIntake) => prevCaloryIntake + (calories || 0));

      setMealTime('');
      setCalories(undefined);
    }
  };

  const handleDeleteMeal = (mealId: number) => {
    const deletedMeal = meals.find((meal) => meal.id === mealId);

    if (deletedMeal) {
      setMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== mealId));

      setTotalCalories((prevTotalCalories) => prevTotalCalories - deletedMeal.calories);

      setCaloryIntake((prevCaloryIntake) => prevCaloryIntake - deletedMeal.calories);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Calory Intake</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLabel> <h1 style={{ margin: "10px" }}> Put in your calory intake </h1> </IonLabel>
      <IonContent className="ion-padding">
        <IonCardContent className="bodyContainer">
          <IonItem color="success">
            <IonLabel position="stacked">Meal Time</IonLabel>
            <IonSelect
              value={mealTime}
              placeholder="Select Meal Time"
              onIonChange={(e) => setMealTime(e.detail.value)}
            >
              <IonSelectOption value="Breakfast">Breakfast</IonSelectOption>
              <IonSelectOption value="Lunch">Lunch</IonSelectOption>
              <IonSelectOption value="Dinner">Dinner</IonSelectOption>
              <IonSelectOption value="Snack">Snack</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem color="success">
            <IonLabel position="stacked">Calories</IonLabel>
            <IonInput
              type="number"
              placeholder="Enter Calories"
              value={calories}
              onIonChange={(e) => setCalories(parseFloat(e.detail.value!))}
            ></IonInput>
          </IonItem>

          <IonButton expand="full" onClick={handleFormSubmit}>
            Submit
          </IonButton>

          <IonList>
            {meals.map((meal) => (
              <IonItemSliding key={meal.id}>
                <IonItem>
                  <IonLabel>{meal.mealTime}</IonLabel>
                  <IonLabel slot="end">{meal.calories} calories</IonLabel>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption onClick={() => handleDeleteMeal(meal.id)}>Delete</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
          </IonList>

        </IonCardContent>
        <IonLabel>Total Calories: {totalIntake}</IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default Intake;
