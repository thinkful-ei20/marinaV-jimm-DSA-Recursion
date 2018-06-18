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

// console.log(doubleInput([1, 2, 3]));

// Reverse string
const reverseStr = str => {
  // base case
  if (!str.length) {
    return "";
  }
  return reverseStr(str.substr(1)) + str.charAt(0);
};

// console.log(reverseStr('puzzle'));

const calcTriangle = num => {
  if (num === 0) {
    return 0;
  }

  return num + calcTriangle(num - 1);
};

// console.log(calcTriangle(3));

const strSplitter = (str, separator) => {
  if(str.indexOf(separator) < 0) {
    return [str];
  }

  return [str.substr(0, str.indexOf(separator)), ...strSplitter(str.substr(str.indexOf(separator) + 1), separator)];
};

console.log(strSplitter("Hello, World Clone, War", ","));

const binaryNum = num => {
  if(num < 2) {
    return "1";
  }

  const binary = Math.floor(num % 2);

  return binaryNum(Math.floor(num / 2)) + binary;
};

// console.log(binaryNum(25));

const factorialNum = num => {
  if (num === 1) {
    return 1;
  }

  return num * factorialNum(num - 1);
};

// console.log(factorialNum(5));

const findFibonacci = num => {
  if (num === 1) {
    return 1;
  }

  if (num === 2) {
    return 1;
  }

  return findFibonacci(num - 1) + findFibonacci(num - 2);
};

console.log(findFibonacci(7));

