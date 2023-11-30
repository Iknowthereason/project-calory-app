import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter, useIonToast,IonCard,IonCardContent,IonText, IonCol, IonGrid, IonRow, IonLoading, } from '@ionic/react';
import React, { useState } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { registerUser } from '../firebaseConfig';
import { toast } from '../toast'

const Register: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [email, setEmail] = useState('')
    const [toast] = useIonToast()
    const[busy, setBusy] = useState<boolean>(false)
    const router = useIonRouter()
    //Fix the register page by centering it and fix the register page to send registration to the database
    async function register() {
        //validation for registration
        setBusy(true)

        if (password !== cpassword) {
            return toast('Passwords do not match', 2000)
        }
        if (password.length < 6 || cpassword.length < 6) {
            return toast('Password too short, min 6 charachters', 3000)
        }
        if (username.trim() === '' || password.trim() === '') {
            return toast('Username and password are required', 2000)
        }

        const res = await registerUser(username, password)
        if (res) {
            toast('You have registered successfully!', 2000)
            setUsername('')
            setPassword('')
            setCPassword('')
            router.push('/login', 'root', 'replace');
            router.push('/login', 'root', 'push')

        }
        setBusy(false)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle style={{ textAlign: 'center', fontSize: '36px', color: 'black', fontWeight: 'bold' }}>Sign up</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonLoading message="Registration in progress!" duration={0} isOpen= {busy} />
            <IonContent>
                <IonText><p style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Registration Page</p></IonText>
                <IonCard>
                    <IonCardContent className="bodyContainer"> 
                        <IonGrid>
                            <IonRow>
                                <IonCol color="background-color">
                                <IonInput className= "input" labelPlacement="stacked" fill="outline" label="Username" placeholder="Enter Username" value={username} onIonChange={(e: any) => setUsername(e.target.value)} />
                                <IonInput className= "input" labelPlacement="stacked" fill="outline" label="Email" placeholder="Enter Email" value={email} onIonChange={(e: any) => setEmail(e.target.value)} />
                                <IonInput className= "input" labelPlacement="stacked" fill="outline" label="Password" type="password" value={password} placeholder="Enter Password" onIonChange={(e: any) => setPassword(e.target.value)} />
                                <IonInput className= "input" labelPlacement="stacked" fill="outline" label="Confirm Password" type="password" value={cpassword} placeholder="Confirm Password" onIonChange={(e: any) => setCPassword(e.target.value)} />
                                <IonButton onClick={register} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Create Account</IonButton>
                                <IonText><p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Already have an account? <Link to="/login">Log in</Link></p></IonText>

                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default Register;