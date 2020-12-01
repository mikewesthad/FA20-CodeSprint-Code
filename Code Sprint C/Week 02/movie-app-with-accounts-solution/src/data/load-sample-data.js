import db from "./firebase";
import sampleData from "./sample-data.json";

async function loadSampleData() {
  sampleData.map(addMovie);
}

async function addMovie({ title, rating, releaseYear }) {
  try {
    const data = { title, rating, releaseYear };

    // Look up a movie matching the title and release year.
    const snapshot = await db
      .collection("movies")
      .where("title", "==", title)
      .where("releaseYear", "==", releaseYear)
      .get();

    // Create a doc reference that points to where this movie is located in the DB - either a new
    // doc if it is not there, or the existing doc.
    let docRef;
    if (snapshot.empty) {
      docRef = db.collection("movies").doc();
    } else {
      docRef = snapshot.docs[0].ref;
    }

    // Update the doc with the given data.
    await docRef.set(data);
  } catch (error) {
    console.log(error);
  }
}

export default loadSampleData;
