import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonToast,
  IonMenuToggle,
  IonCardContent,
  IonIcon,
} from '@ionic/react';
import { menuOutline } from 'ionicons/icons';
import {IIntensityState} from "../interfaces/interfaces";
import {Meal} from "../pages/Intake";
 

const Calculator: React.FC<IIntensityState & Meal> = ({ intensity, calories }) => {
  let burnedCalories: number;
  switch (intensity) {
    case "low":
      burnedCalories = 500;
      break;
    case "medium":
      burnedCalories = 700;
      break;
    case "hard":
      burnedCalories = 1000;
      break;
      case "extreme":
        burnedCalories = 1500;
        break;
    default:
      burnedCalories = 300;
  }
  console.log(calories);

  const difference = calories - burnedCalories;

  const [showToast, setShowToast] = React.useState<boolean>(false);
  const [toastMessage, setToastMessage] = React.useState<string>("");


  const handleButtonClick = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuToggle slot="start">
            <IonButton>
              <IonIcon icon={menuOutline} />
            </IonButton>
          </IonMenuToggle>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>Calculate your calories</h2>
        <IonCardContent className="bodyContainer">
        <IonButton expand="full" color="success" onClick={() => handleButtonClick(`You have taken ${calories} calories today`)}>
          Shows days total calories intake
        </IonButton>

        <IonButton expand="full" color="success" onClick={() => handleButtonClick(`You have burned approximately ${burnedCalories} calories today`)}>
          Show burned calories amount
        </IonButton>

        <IonButton expand="full" color="success" onClick={() => handleButtonClick(`Total intake consumption difference today: ${difference} kcal`)}>
          Intake - Consumption difference
        </IonButton>

        <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message={toastMessage}
            duration={3000}
          />
        </IonCardContent>
      </IonContent>
    </IonPage>
  );
};

export default Calculator;