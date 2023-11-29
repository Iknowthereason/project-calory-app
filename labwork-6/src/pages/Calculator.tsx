import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonToast, IonMenuToggle, IonCardContent, IonIcon,} from '@ionic/react';
import { menuOutline } from 'ionicons/icons';


interface CalculatorProps {
  totalIntake: number;
  workoutLevel: string;
}

const Calculator: React.FC <CalculatorProps> = ({ totalIntake, workoutLevel }) => {
  let burnedCalories: number;
  switch (workoutLevel) {
    case 'LOW':
      burnedCalories = 500;
      break;
    case 'MEDIUM':
      burnedCalories = 700;
      break;
    case 'HARD':
      burnedCalories = 1000;
      break;
    default:
      burnedCalories = 300;
  }

  const difference = totalIntake - burnedCalories;

  const [showToast, setShowToast] = React.useState<boolean>(false);
  const [toastMessage, setToastMessage] = React.useState<string>('');

  const handleButtonClick = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
    console.log(message);
  };

  return (
    <IonPage>
      <IonContent>
        <h2>Calculate your calories</h2>
        <IonCardContent className="bodyContainer">
          <IonButton
            expand="full"
            color="success"
            onClick={() => handleButtonClick(`You have taken ${totalIntake} calories today`)}
          >
            Shows days total calories intake
          </IonButton>

          <IonButton
            expand="full"
            color="success"
            onClick={() => handleButtonClick(`You have burned approximately ${burnedCalories} calories today`)}
          >
            Show burned calories amount
          </IonButton>

          <IonButton
            expand="full"
            color="success"
            onClick={() => handleButtonClick(`Total intake consumption difference today: ${difference} kcal`)}
          >
            Intake - Consumption difference
          </IonButton>

          <IonToast isOpen={showToast} message={toastMessage} position="bottom" />
        </IonCardContent>
      </IonContent>
    </IonPage>
  );
};

export default Calculator; 