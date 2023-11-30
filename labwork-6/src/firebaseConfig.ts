import React, { useState, useEffect } from 'react'
import { Link, Redirect, Route } from 'react-router-dom';
import { loginUser as login, registerUser as register } from './firebaseConfig'; // Update the path to firebaseConfig
import { toast } from './toast';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import{getFirestore, collection, getDocs} from 'firebase/firestore/lite';

const FirebaseConfig = {
    apiKey: "AIzaSyD9t8s1SDbrKtNmQPpjJoXoM7rcCwTTx5k",
    authDomain: "labwork-6-d8640.firebaseapp.com",
    projectId: "labwork-6-d8640",
    storageBucket: "labwork-6-d8640.appspot.com",
    messagingSenderId: "426859889115",
    appId: "1:426859889115:web:220554101a807e8a8467fe",
    measurementId: "G-2MQY6LDHVK"
}

firebase.initializeApp(FirebaseConfig);

const db = firebase.firestore();

const colRef = db.collection('users');



export async function loginUser(username:string, password: string) {
    const email = `${username}@ikanid.com`

    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(res)
        return true
    } catch (error) {
        console.log(error)
        return false
    }

}

export async function registerUser(username: string, password: string) {
    const email = `${username}@ikanid.com`

    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)

        // Add a new document in collection "users" with ID 'username'
        await db.collection('users').doc(username).set({
            username: username,
            email: email,
            // add any other data you want to store here
        })

        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function getUser(username: string) {
    try {
        const doc = await db.collection('users').doc(username).get();
        if (doc.exists) {
            console.log("Document data:", doc.data());
            return doc.data();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.log("Error getting document:", error);
    }
}