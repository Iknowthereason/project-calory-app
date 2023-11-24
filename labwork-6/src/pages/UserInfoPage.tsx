import { FunctionComponent, useState, useCallback } from "react";
import { IonButton, IonCard, IonCardContent, IonContent, IonGrid, IonHeader, IonInput, IonCol, IonList, IonPage, IonRow, IonTitle, IonToolbar, IonText, IonRadio, IonRadioGroup, IonLabel, IonSegment, IonSegmentButton, IonButtons, IonMenuButton } from "@ionic/react";
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
            <IonTitle>User Information</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonText>
            <h4>Please fill in the<br></br>user information</h4>
          </IonText>
          <IonGrid>
            <IonRow class="ion-justify-content-center">
              <IonCol size="6">
                <IonSegment value="metric">
                  <IonSegmentButton className="units-toggle" value="metric">
                    <IonLabel>Metric</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton className="units-toggle">
                    <IonLabel>Imperial</IonLabel>
                  </IonSegmentButton>
                </IonSegment>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonCard>
            <IonCardContent className="bodyContainer">
              <IonGrid>
                <IonRow>
                  <IonCol color="background-color">
                    <IonInput className="input" labelPlacement="stacked" fill="outline" label="Age" placeholder="Enter Age"></IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol color="background-color">
                    <IonInput className="input" labelPlacement="stacked" fill="outline" label="Height" placeholder="Enter Height"></IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol color="background-color">
                    <IonInput className="input" labelPlacement="stacked" fill="outline" label="Weight" placeholder="Enter Weight"></IonInput>
                  </IonCol >
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonText>
                      <p>Select activity level</p>
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonButton expand="block" fill="solid" shape="round" color="light-blue">Low</IonButton>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonButton expand="block" fill="solid" shape="round" color="light-yellow">Medium</IonButton>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonButton expand="block" fill="solid" shape="round" color="red">High</IonButton>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonText>
                      <p>Do you have any medical problems?</p>
                    </IonText>
                    <IonRadioGroup>
                      <IonRadio labelPlacement="end">Yes</IonRadio>
                      <br />
                      <IonRadio labelPlacement="end">No</IonRadio>
                    </IonRadioGroup>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton expand="block">Save</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default UserInfoPage;