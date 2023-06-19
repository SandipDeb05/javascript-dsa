// TODO Using ... spread operator
let obj1 = {
  name: "Sandip",
  age: 24,
  nature: {
    helping: true,
    shy: false,
  },
  books: {
    name: "Learn JS",
  },
};
let obj2 = {
  qualification: "b.Tech",
  loves: "JavaScript",
  nature: {
    angry: false,
    shy: true,
  },
};

let merge1 = { ...obj1, ...obj2 };
// console.log(merge1);

// TODO Using Object.assign(target, source1, source2, ...)
let merge2 = Object.assign({}, obj1, obj2);
// console.log(merge2);

// TODO Using custom function
let customMerge = (...arguments) => {
  let target = {};

  let merger = (obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        target[key] = obj[key];
      }
    }
  };

  for (let i = 0; i < arguments.length; i++) {
    merger(arguments[i]);
  }

  return target;
};

let merge3 = customMerge(obj1, obj2);
// console.log(merge3);

// TODO Deep merge
let deepMergeFunction = (...arguments) => {
  let target = {};

  let merger = (obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object") {
          target[key] = deepMergeFunction(target[key], obj[key]);
        } else {
          target[key] = obj[key];
        }
      }
    }
  };

  for (let i = 0; i < arguments.length; i++) {
    merger(arguments[i]);
  }

  return target;
};

let merge4 = deepMergeFunction(obj1, obj2);
console.log(merge4);
