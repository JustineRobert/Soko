// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwKkU68GjwphexBTELtNhe30ZE0QoJc1U",
  authDomain: "soko-dc480.firebaseapp.com",
  databaseURL: "https://soko-dc480.firebaseio.com",
  projectId: "soko-dc480",
  storageBucket: "soko-dc480.appspot.com",
  messagingSenderId: "1013290664512",
  appId: "1:1013290664512:web:b079d6d736b76a2684d5a5",
  measurementId: "G-E5THD7QLQ9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };