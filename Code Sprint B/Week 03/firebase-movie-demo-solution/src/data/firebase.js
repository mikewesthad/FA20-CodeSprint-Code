import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpd1e9j9UnVKfCRP-4LFNERBIgo96_fz4",
  authDomain: "colum-code-sprint-b.firebaseapp.com",
  databaseURL: "https://colum-code-sprint-b.firebaseio.com",
  projectId: "colum-code-sprint-b",
  storageBucket: "colum-code-sprint-b.appspot.com",
  messagingSenderId: "551612801435",
  appId: "1:551612801435:web:5d113ad14e67d7aa02c13e",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const moviesCollection = db.collection("movies");

export default db;
export { moviesCollection };
