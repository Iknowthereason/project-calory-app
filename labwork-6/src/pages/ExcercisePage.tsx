import { FunctionComponent, useState, useCallback } from "react";
import { IonButton, IonCard, IonCardContent, IonContent, IonGrid, IonHeader, IonInput, IonCol, IonList, IonPage, IonRow, IonTitle, IonToolbar, IonText, IonRadio, IonRadioGroup, IonLabel, IonSegment, IonSegmentButton, IonButtons, IonMenuButton, IonAlert } from "@ionic/react";
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
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Excercise page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonText>
            <h4>Enter a workout by choosign the workout intensity and the workout duration.</h4>
          </IonText>
          <IonCard>
            <IonCardContent className="bodyContainer">
              <IonGrid>
                <IonRow>
                  <IonCol color="background-color">
                    <IonButton id="workoutIntensity" color="light-green" expand="block">Workout intensity</IonButton>
                    <IonAlert
                      trigger="workoutIntensity"
                      header="Select the intensity"
                      buttons={['CANCEL', 'OK']}
                      inputs={[
                        {
                          label: 'Low',
                          type: 'radio',
                          value: 'low',
                        },
                        {
                          label: 'Medium',
                          type: 'radio',
                          value: 'medium',
                        },
                        {
                          label: 'Hard',
                          type: 'radio',
                          value: 'hard',
                        },
                      ]}
                    ></IonAlert>
                  </IonCol>
                  <IonCol color="background-color">
                    <IonButton id="workoutHours" color="light-green" expand="block">Workout hours</IonButton>
                    <IonAlert
                      trigger="workoutHours"
                      header="Insert total duration of the workout at the selected workout intensity"
                      buttons={['CANCEL', 'OK']}
                      inputs={[
                        {
                          type: 'number',
                          placeholder: 'Workout duration',
                          min: 0,
                          max: 100,
                        }
                      ]}
                    ></IonAlert>
                  </IonCol>
                  <IonCol color="background-color">
                    <IonButton expand="block">Submit workout</IonButton>
                  </IonCol>
                  <IonCol color="background-color">
                    <IonButton color="light-green" expand="block">Recommended exercise</IonButton>
                  </IonCol>
                  <IonCol color="background-color">
                    <IonButton color="light-green" expand="block">Recommended food type</IonButton>
                  </IonCol>
                </IonRow>
          
              </IonGrid>
            </IonCardContent>
          </IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
              
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default UserInfoPage;