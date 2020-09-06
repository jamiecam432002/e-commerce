import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCtqRjMfd_IsKgoiM-ZI23Icz7jahS3P_M",
  authDomain: "crown-db-9ce78.firebaseapp.com",
  databaseURL: "https://crown-db-9ce78.firebaseio.com",
  projectId: "crown-db-9ce78",
  storageBucket: "crown-db-9ce78.appspot.com",
  messagingSenderId: "36066231730",
  appId: "1:36066231730:web:c278d3561069942b2010ab",
  measurementId: "G-Y2ZYSDZWG3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
