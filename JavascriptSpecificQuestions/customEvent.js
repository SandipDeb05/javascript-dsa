const customEvent = new Event("checkStatus");

document.addEventListener("checkStatus", (event) => {
  console.log("online");
});

// document.dispatchEvent(customEvent);

const anotherEvent = new CustomEvent("checkPayment", {
  detail: {
    payment: false,
    amount: 100,
  },
});

document.addEventListener("checkPayment", (event) => {
  console.log("Its up");
  console.log(event);
});

document.dispatchEvent(anotherEvent);
