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

async function addMovie() {
  try {
    const doc = await db.collection("movies").add({
      title: "Alien",
      releaseYear: 1979,
      rating: 4,
    });
    console.log("Successfully added new movie:");
    console.log(doc.id);
    console.log(doc.path);
  } catch (error) {
    console.log(error);
  }
}

async function getAllMovies() {
  try {
    const snapshot = await db.collection("movies").get();
    const docs = snapshot.docs;
    for (const doc of docs) {
      console.log(doc.id);
      console.log(doc.data());
    }
  } catch (error) {
    console.log(error);
  }
}

// DEMO PURPOSES:
const button = document.querySelector("#add-movie-button");
button.addEventListener("click", addMovie);

getAllMovies();

// const moviesSnapshotPromise = db.collection("movies").get();
// moviesSnapshotPromise
//   .then((snapshot) => {
//     const docs = snapshot.docs;
//     for (const doc of docs) {
//       console.log(doc.id);
//       console.log(doc.data());
//     }
//   })
//   .catch((error) => console.error(error));
// console.log(moviesSnapshotPromise);
