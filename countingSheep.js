function countSheep(num){
  // base case
  if(num < 1){
    return;
  }

  console.log(`${num} - Another sheep jump over the fence`);

  // call with decremented number
  return countSheep(num-1);
}

// countSheep(3);

// Array Double
const doubleInput = arr => {
  // base case
  if (!arr.length) {
    return [];
  }
  return [arr[0] * 2, ...doubleInput(arr.slice(1))];

};

console.log(doubleInput([1, 2, 3]));