// Demo promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randNum = Math.floor(Math.random() * 3);
//     if (randNum !== 1) {
//       resolve(randNum);
//     } else {
//       reject("The number was the evil number 1.");
//     }
//   }, 500);
// });
// promise.then((num) => console.log(`Promise successful - generated a ${num}.`));
// promise.catch((error) => console.log(`Error: ${error}`));
// promise.finally(() => console.log("Promise was either fulfilled or rejected."));

// Chaining demo of a promise:
new Promise((resolve, reject) => {
  setTimeout(() => {
    const randNum = Math.floor(Math.random() * 3);
    if (randNum !== 1) {
      resolve(randNum);
    } else {
      reject("The number was the evil number 1.");
    }
  }, 500);
})
  .then((num) => console.log(`Promise successful - generated a ${num}.`))
  .catch((error) => console.log(`Error: ${error}`))
  .finally(() => console.log("Promise was either fulfilled or rejected."));
