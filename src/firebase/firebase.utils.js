import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCN7A99E8emEbpqw8tc6jBhip8BMCIwsLg",
  authDomain: "crwn-db-f05ea.firebaseapp.com",
  projectId: "crwn-db-f05ea",
  storageBucket: "crwn-db-f05ea.appspot.com",
  messagingSenderId: "853435216079",
  appId: "1:853435216079:web:8208bacf5a4c6e0398c7ba",
  measurementId: "G-NBWCBB7H2W",
};

firebase.initializeApp(config);

//configuring googe sign in

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
