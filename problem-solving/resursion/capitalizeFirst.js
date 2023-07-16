function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  let firstStr = arr[0];
  let capitalizeStr = firstStr.charAt(0).toUpperCase() + firstStr.slice(1);
  let restOfString = capitalizeFirst(arr.slice(1));
  return [capitalizeStr, ...restOfString];
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
