// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX_7Bq4wTXPA2TASHkLqUp-_ejJO-fTKg",
  authDomain: "clone-ef041.firebaseapp.com",
  projectId: "clone-ef041",
  storageBucket: "clone-ef041.appspot.com",
  messagingSenderId: "328165449193",
  appId: "1:328165449193:web:637942472676e98ba13f78",
  measurementId: "G-M7ZF5RYW4V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
