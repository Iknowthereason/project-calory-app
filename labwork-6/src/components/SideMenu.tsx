import React from 'react';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuToggle,
  IonButton,
  IonIcon,
  IonCardContent,
  IonMenuButton,
  IonButtons,
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { menuOutline } from 'ionicons/icons';

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
          <IonItem button routerLink="/intake" color="success">
            Calory Intake
          </IonItem>
          <IonItem button routerLink="/exercise-page" color="success">
            Exercise Page
          </IonItem>
          <IonItem button routerLink="/calculator" color="success">
            Calculator
          </IonItem>
          <IonItem button routerLink="/user-info" color="success">
            User Information
          </IonItem>
        </IonList>
      </IonCardContent>
      <IonCardContent className="bodyContainer">
        <IonItem button routerLink="/login" color="primary">
          Log Out
        </IonItem>
      </IonCardContent>
    </IonContent>
  </IonMenu>
);

export default SideMenu;