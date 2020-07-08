import firebase from 'firebase/app'
import "firebase/auth";
// import database from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const db = firebaseApp.database();
// export default firebaseApp

// export default firebase

