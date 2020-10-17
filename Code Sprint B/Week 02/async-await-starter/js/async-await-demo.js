// Async Await Docs:
// > https://javascript.info/async-await
// > https://developers.google.com/web/fundamentals/primers/async-functions

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

async function main() {
  console.log("main starting...");
  await wait(1000);
  console.log("1 second has passed...");
  await wait(2000);
  console.log("2 more seconds have passed...");
  await wait(1000);
  console.log("main done...");
}

main();

// Vs

console.log("starting...");
wait(1000)
  .then(() => {
    console.log("1 second has passed...");
    return wait(2000);
  })
  .then(() => {
    console.log("2 more seconds have passed...");
    return wait(1000);
  })
  .then(() => {
    console.log("main done...");
  });
