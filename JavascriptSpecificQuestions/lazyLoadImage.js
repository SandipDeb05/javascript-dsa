const lazyImages = [...document.querySelectorAll(".lazy-img")];

function throttling(func, limit) {
  let lastFunc;
  let lastRan;

  return function () {
    const context = this;
    const args = arguments;

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

let inAdvance = 50;
function lazyLoad() {
  lazyImages.forEach((image) => {
    if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
      //if image is in viewport set the src from custom attribute
      //dataset is used to get the custom attribute
      image.src = image.dataset.src;
      //if the image is loaded then add class to it
      image.onload = () => image.classList.add("loaded");
    }
  });
}

lazyLoad(); //Call the function to load the first image

// lazy load the function when window is scrolled
window.addEventListener("scroll", throttling(lazyLoad, 1000));

//lazy load the function when window is resized
window.addEventListener("resize", throttling(lazyLoad, 1000));
