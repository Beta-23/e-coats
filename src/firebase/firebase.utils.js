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

firebase.initializeApp(config)

  // async api for the user object, passing in userAuth and other data
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get(); 
    // check if there's any user data from the userAuth object and creating it, otherwise catch error
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user!', error.message);
      }
    }
    return userRef;
  };

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    // console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      // console.log(newDocRef);
      batch.set(newDocRef, obj);
    });
    return await batch.commit();
  };

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(docSnapshot => {
      const { title, items } = docSnapshot.data();

      return { 
        routeName: encodeURI(title.toLowerCase()),
        id: docSnapshot.id,
        title,
        items
      }
    });

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, { });
  };
  // Checks for auth user via promise call back
  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject)
    });
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
  // Get access to the google popup when the GoogleAuthProvider runs for auth and signin
  googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
