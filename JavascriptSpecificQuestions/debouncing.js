function debounce(func, delay) {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    console.log(args);
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
}

const btn = document.getElementById("btn");

btn.addEventListener(
  "click",
  debounce(function () {
    console.log("Hello there");
  }, 2000)
);
