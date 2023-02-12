// TODO Callbacks
console.log("JS is fun");
setTimeout(() => {
  console.log("Programming is great");
}, 2000);
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
      }, 3000);
    }
  });
  return promise;
}

getOrder(cart).then((data) => console.log(data));
getOrder([]).then((data) => console.log(data));
