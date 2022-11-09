import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyChXWQquTf2Actw53Qjzz13dJDxf-BN8hM",
    authDomain: "e-commerce-website-739b0.firebaseapp.com",
    projectId: "e-commerce-website-739b0",
    storageBucket: "e-commerce-website-739b0.appspot.com",
    messagingSenderId: "583663284064",
    appId: "1:583663284064:web:e1d60ecbbf14ce80723805",
    measurementId: "G-Y5HYRBYFEV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();