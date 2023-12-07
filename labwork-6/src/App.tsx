import { Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact
} from '@ionic/react';
import { IUserState } from './interfaces/interfaces'
import { IonReactRouter } from '@ionic/react-router';
import Calculator from './pages/Calculator';
import SideMenu from './components/SideMenu';
import UserInfoPage from './pages/UserInfoPage';
import Login from './pages/Login';
import Register from './pages/Register';
import ExercisePage from './pages/ExercisePage';
import Intake from './pages/Intake';
import { getUser } from './firebaseConfig';

/* Core CSS required for Ionic components to work properly  */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';



setupIonicReact();

const App: React.FC = () => {
  const [user, setUser] = useState<IUserState>({username: "", age: "", height: "", weight: "", activityLevel: "", medicalProblems: true })
  const [calories, setCalories] = useState<number>(0)
  const [caloryIntake, setCaloryIntake] = useState<number>(0)

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <IonSplitPane contentId="main">
            <SideMenu />
            <IonRouterOutlet id="main">
              <Route path="/login" render={() => <Login user={user} setUser={setUser} />} exact />
              <Redirect from="/" to="/login" exact />
              <Route path="/register" component={Register} exact />
              <Route path="/exercise-page" render={() => <ExercisePage user={user} setCalories={setCalories} />} exact />
              <Route path="/calculator" render={() => <Calculator calories={calories} activityLevel={user.activityLevel!} caloryIntake={caloryIntake} />} exact />
              <Route exact path="/user-info" render={() => <UserInfoPage user={user} setUser={setUser} />} />
              <Route path="/intake" render={() => <Intake setCaloryIntake={setCaloryIntake} />} exact />

            </IonRouterOutlet>
          </IonSplitPane>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
