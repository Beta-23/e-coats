import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAOnP1uqoZdWgPSHJNGMe2S5vlRISXipK8",
    authDomain: "e-coats.firebaseapp.com",
    databaseURL: "https://e-coats.firebaseio.com",
    projectId: "e-coats",
    storageBucket: "e-coats.appspot.com",
    messagingSenderId: "556190849140",
    appId: "1:556190849140:web:c43083806429453117d921",
    measurementId: "G-GWXS761F09"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  // Get access to the google popup when the GoogleAuthProvider runs for auth and signin
  provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
