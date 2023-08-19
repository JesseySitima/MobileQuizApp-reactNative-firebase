import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAPdyU1RKK1WRnAKxAltA3_1qTMm_Kd6W8",
    authDomain: "taxiapp-be141.firebaseapp.com",
    projectId: "taxiapp-be141",
    storageBucket: "taxiapp-be141.appspot.com",
    messagingSenderId: "899729730241",
    appId: "1:899729730241:web:0e70e568128d6296cdc240"
  };

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export { firebase };