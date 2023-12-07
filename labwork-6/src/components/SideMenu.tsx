import React from 'react';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonCardContent,
  IonMenuButton,
  IonButtons,
  IonMenuToggle,
} from '@ionic/react';

const SideMenu: React.FC = () => (
  <IonMenu contentId="main" type="overlay">
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCardContent className="bodyContainer">
        <IonList color="success">
          <IonMenuToggle>
            <IonItem button routerLink="/intake" color="success">
              Calory Intake
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem button routerLink="/exercise-page" color="success">
              Exercise Page
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem button routerLink="/calculator" color="success">
              Calculator
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem button routerLink="/user-info" color="success">
              User Information
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonCardContent>
      <IonCardContent className="bodyContainer">
        <IonMenuToggle>
          <IonItem button routerLink="/login" color="primary">
            Log Out
          </IonItem>
        </IonMenuToggle>
      </IonCardContent>
    </IonContent>
  </IonMenu>
);

export default SideMenu;