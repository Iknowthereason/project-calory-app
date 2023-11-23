import React, { useState, useEffect } from 'react'
import { Link, Redirect, Route } from 'react-router-dom';
import { loginUser as login, registerUser as register } from './firebaseConfig'; // Update the path to firebaseConfig
import { toast } from './toast';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyD9t8s1SDbrKtNmQPpjJoXoM7rcCwTTx5k",
    authDomain: "labwork-6-d8640.firebaseapp.com",
    projectId: "labwork-6-d8640",
    storageBucket: "labwork-6-d8640.appspot.com",
    messagingSenderId: "426859889115",
    appId: "1:426859889115:web:220554101a807e8a8467fe",
    measurementId: "G-2MQY6LDHVK"
}

firebase.initializeApp(config);

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
        return res
    } catch (error: any) {
        toast(error.message, 4000)
        return false
    }
}