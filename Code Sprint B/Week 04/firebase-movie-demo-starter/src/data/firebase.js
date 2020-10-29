import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "========= INSERT YOUR CONFIG =========",
  authDomain: "========= INSERT YOUR CONFIG =========",
  databaseURL: "========= INSERT YOUR CONFIG =========",
  projectId: "========= INSERT YOUR CONFIG =========",
  storageBucket: "========= INSERT YOUR CONFIG =========",
  messagingSenderId: "========= INSERT YOUR CONFIG =========",
  appId: "========= INSERT YOUR CONFIG =========",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const moviesCollection = db.collection("movies");

export default db;
export { moviesCollection };
