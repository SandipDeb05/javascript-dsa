function sleep(miliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, miliseconds);
  });
}

// sleep(2000).then(() => {
//   console.log("I woke up!");
// });

async function printSomething() {
  await sleep(3000);
  console.log("Good morning");
}
printSomething();
