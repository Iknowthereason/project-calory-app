import { useState } from "react";
import { IonButton, IonCard, IonCardContent, IonContent, IonGrid, IonHeader, IonInput, IonCol, IonList, IonPage, IonRow, IonTitle, IonToolbar, IonText, IonRadio, IonRadioGroup, IonLabel, IonSegment, IonSegmentButton, IonButtons, IonMenuButton } from "@ionic/react";
import { IUserProps, IUserInfoState } from '../interfaces/interfaces'
const UserInfoPage: React.FC<IUserProps> = ({ user, setUser }) => {

  const [userInfo, setUserInfo] = useState<IUserInfoState>({ age: "", height: "", weight: "", activityLevel: "", medicalProblems: false })

  const handleChange = (event: any) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value })
  }

  const handleActivityLevelChange = (event: any) => {
    setUserInfo({ ...userInfo, activityLevel: event.target.value })
  }

  const handleSave = () => {
    setUser(userInfo)

  }

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
          <IonLabel>
            <h1 style={{ margin: "10px" }}>Please fill in the user information</h1>
          </IonLabel>
          <IonCard>
            <IonCardContent className="bodyContainer">
              <IonGrid>
                <IonRow>
                  <IonCol color="background-color">
                    <IonLabel>Age</IonLabel>
                    <IonInput
                      type="number"
                      className="input"
                      labelPlacement="stacked"
                      fill="outline"
                      placeholder="Enter Age"
                      value={userInfo.age.toString()}
                      onIonChange={handleChange}
                      name="age"
                    ></IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol color="background-color">
                    <IonLabel>Height (cm)</IonLabel>
                    <IonInput
                      type="number"
                      className="input"
                      labelPlacement="stacked"
                      fill="outline"
                      placeholder="Enter Height"
                      value={userInfo.height.toString()}
                      onIonChange={handleChange}
                      name="height">
                    </IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol color="background-color">
                    <IonLabel>Weight (kg)</IonLabel>
                    <IonInput
                      type="number"
                      className="input"
                      labelPlacement="stacked"
                      fill="outline"
                      placeholder="Enter Weight"
                      value={userInfo.weight.toString()}
                      onIonChange={handleChange}
                      name="weight">
                    </IonInput>
                  </IonCol >
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonText>
                      <p>Select activity level</p>
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonSegment value={userInfo.activityLevel}>
                  <IonRow>
                    <IonCol>
                      <IonSegmentButton className="activityLevelButton-low" value="low" onClick={handleActivityLevelChange}>Low</IonSegmentButton>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonSegmentButton className="activityLevelButton-medium" value="medium" onClick={handleActivityLevelChange}>Medium</IonSegmentButton>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonSegmentButton className="activityLevelButton-high" value="high" onClick={handleActivityLevelChange}>High</IonSegmentButton>
                    </IonCol>
                  </IonRow>
                </IonSegment>
                <IonRow>
                  <IonCol>
                    <IonText>
                      <p>Do you have any medical problems?</p>
                    </IonText>
                    <IonRadioGroup value={userInfo.medicalProblems}>
                      <IonRadio labelPlacement="end" name="medicalProblems" value={true} onClick={handleChange}>Yes</IonRadio>
                      <br />
                      <IonRadio labelPlacement="end" name="medicalProblems" value={false} onClick={handleChange}>No</IonRadio>
                    </IonRadioGroup>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton expand="block" onClick={handleSave}>Save</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default UserInfoPage;