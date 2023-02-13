// TODO Callbacks
console.log("JS is fun");
setTimeout(() => {
  console.log("Programming is great");
}, 1000);
console.log("Frontend is cool");

// FIXME callback hell
onSubmit();

function onSubmit() {
  createOrder(function () {
    payment(function () {
      summery(function () {
        updateWallet();
      });
    });
  });
}
function createOrder(callback) {
  console.log("Order created");
  callback();
}
function payment(callback) {
  console.log("Payment done");
  callback();
}
function summery(callback) {
  console.log("Your order is placed");
  callback();
}
function updateWallet() {
  console.log("Buy more");
}

// FIXME Inversion of control -> We may loose control in our code while using callbacks

// TODO Promise -> Used to handle async operations in js
// {data: undefined} -> when fullfilled -> {data: data}
// promise objects are immutable

const user = fetch("https://api.github.com/users/sandipDeb05");
user
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((e) => console.log(e))
  .finally(() => console.log("Promise code completed"));

// TODO async await
async function getUser() {
  try {
    const user = await fetch("https://api.github.com/users/sandipDeb05");
    const data = await user.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("async code completed");
  }
}
getUser();

// TODO Create a promise
const cart = ["laptop", "mobile", "earphones"];

function getOrder(cart = []) {
  const promise = new Promise((resolve, reject) => {
    if (cart.length < 1) {
      const err = new Error("Cart is empty");
      reject(err);
    } else {
      setTimeout(() => {
        resolve(cart);
      }, 1000);
    }
  });
  return promise;
}

getOrder(cart).then((data) => console.log(data));
getOrder([]).then((data) => console.log(data));

// TODO Multiple Promise handling
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 3000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 3 rejected");
    // resolve("Promise 3 resolved");
  }, 4000);
});

// TODO Promise.all
const resPromiseAll = Promise.all([promise1, promise2, promise3]);
resPromiseAll.then((data) => console.log("All=> ", data));

// TODO Promise.allSettled
const resPromiseAllSettled = Promise.allSettled([promise1, promise2, promise3]);
resPromiseAllSettled.then((data) => console.log("All Sellted=> ", data));

// TODO Promise.any
const resPromiseAny = Promise.any([promise1, promise2, promise3]);
resPromiseAllSettled.then((data) => console.log("Any=> ", data));

// TODO Promise.race
const resPromiseRace = Promise.race([promise1, promise2, promise3]);
resPromiseAllSettled.then((data) => console.log("Race=> ", data));

async function parallel() {
  const [op1, op2, op3] = await Promise.all([promise1, promise2, promise3]);
  console.log("Parallel=> ", op1, op2, op3);
}
parallel();

async function race() {
  const op1 = await Promise.race([promise1, promise2, promise3]);
  console.log("Race one=> ", op1);
}
race();

async function sequence() {
  const op1 = await promise1;
  const op2 = await promise2;
  const op3 = await promise3;
  console.log("Sequence=> ", op1, op2, op3);
}
sequence();

// TODO URLs
const urls = [
  "https://api.github.com/users/sandipDeb05",
  "https://api.github.com/users/vishalMishra",
  "https://api.github.com/users/AtifAslam",
];

const users = Promise.all(
  urls.map(async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  })
).then((data) => console.log(data));
