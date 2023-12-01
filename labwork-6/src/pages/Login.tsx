import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter, useIonToast, IonCard, IonCardContent, IonText, IonCol, IonGrid, IonRow, IonLoading, } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../firebaseConfig';

const Login: React.FC = () => {
    const [busy, setBusy] = useState<boolean>(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [toast] = useIonToast()
    const router = useIonRouter();

    //Fix the loging page by centering it and fix the login to send registration to the database
    async function login() {
        setBusy(true)

        const res = await loginUser(username, password)

        if (res) {
            toast('You have logged in!', 3000); // Set duration to 3000 milliseconds (3 seconds)
            const UserData = await loginUser(username, password);
            console.log(UserData);
            router.push('/user-info', 'root', 'replace')
            router.push('/user-info', 'root', 'push')
        } else {
            toast('Wrong user information. Don\'t have an account?')
        }
        setBusy(false)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle style={{ textAlign: 'center', fontSize: '36px', color: 'black', fontWeight: 'bold' }}>Sign in</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonLoading message="please wait.." duration={0} isOpen={busy} />
            <IonContent>
                <IonText><p style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Welcome Back!</p></IonText>
                <IonCard>
                    <IonCardContent className="bodyContainer">
                        <IonGrid>
                            <IonRow class="ion-align-items-center">
                                <IonCol color="background-color">
                                    <IonInput className="input" labelPlacement="stacked" fill="outline" label="Username" placeholder="Enter Username" onIonChange={(e: any) => setUsername(e.target.value)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                                    <IonInput className="input" labelPlacement="stacked" fill="outline" label="Password" type="password" placeholder="Enter Password" onIonChange={(e: any) => setPassword(e.target.value)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                                    <IonButton onClick={login} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Log in</IonButton>
                                    <IonText><p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Don't Have an Account? <Link to="/register">Sign up</Link></p></IonText>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;