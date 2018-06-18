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
//console.log(doubleInput([1, 2, 3]));

const reverseString = str => {
  if(str.length === 1){
    return str[0];
  }
  return [...reverseString(str.slice(-(str.length-1))), str[0]];
};

//console.log(reverseString('banana').join(''));

function nthTriangular(n) {
  if (n === 1) {
    return 1;
  }
  return n + nthTriangular(n - 1);
}

console.log(nthTriangular(5));