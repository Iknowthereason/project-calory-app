import { FunctionComponent, useState, useCallback, MouseEvent } from "react";
import { IonButton, IonCard, IonCardContent, IonContent, IonGrid, IonHeader, IonInput, IonCol, IonList, IonPage, IonRow, IonTitle, IonToolbar, IonText, IonRadio, IonRadioGroup, IonLabel, IonSegment, IonSegmentButton, IonButtons, IonMenuButton } from "@ionic/react";
const UserInfoPage: FunctionComponent = () => {
  const [userInfo, setUserInfo] = useState<IUserInfoState>({ age: "", height: "", weight: "", activityLevel: "", medicalProblems: false })
  const [units, setUnits] = useState<string>("metric")
  

  interface IUserInfoState {
    age: String
    height: String
    weight: String
    activityLevel: "low" | "medium" | "high" | ""
    medicalProblems: Boolean

  }
    
  const handleUnitChange = (event: MouseEvent<HTMLIonSegmentButtonElement, globalThis.MouseEvent>) => {
    setUnits((event.target as HTMLInputElement).value)
  }

  const handleChange = (event: any) => {
    if (units === "imperial") {

    }
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value })
    console.log(event)
  }

  const handleActivityLevelChange = (event: any) => {
    setUserInfo({ ...userInfo, activityLevel: event.target.value})
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
            <h1 style={{ margin: "10px" }}>Please fill in the user information</h1></IonLabel>
   {/*        <IonText>
            <h4>Please fill in the user information</h4>
          </IonText> */}
          <IonGrid>
            <IonRow class="ion-justify-content-center">
              <IonCol size="6">
                <IonSegment value={units}>
                  <IonSegmentButton className="units-toggle" value="metric" onClick={handleUnitChange}>
                    <IonLabel>Metric</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton className="units-toggle" value="imperial" onClick={handleUnitChange}>
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
                {units === "metric" ?
                <div>
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
                  </div>
                  :
                  <div>
                  <IonRow>
                    <IonRow>
                      <IonLabel>&nbsp;Height</IonLabel>
                    </IonRow>
                    <IonRow>
                      <IonCol color="background-color">
                        <IonInput
                          type="number"
                          className="input" 
                          labelPlacement="stacked" 
                          fill="outline" 
                          label="Feet" 
                          placeholder="Enter feet"
                          value={userInfo.height.toString()}
                          onIonChange={handleChange}
                          name="height"></IonInput>
                      </IonCol>
                      <IonCol color="background-color">
                        <IonInput
                        type="number"
                        className="input" 
                        labelPlacement="stacked" 
                        fill="outline" 
                        label="Inches" 
                        placeholder="Enter inches"
                        value={userInfo.height.toString()}
                        onIonChange={handleChange}
                        name="height"></IonInput>
                      </IonCol>
                    </IonRow>
                  </IonRow>
                  <IonRow>
                    <IonCol color="background-color">
                      <IonLabel>Weight (lb)</IonLabel>
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
                </div>
                }
               
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