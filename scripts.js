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

const doubleArray = arr => {
  // base case
  if (!arr.length) {
    return [];
  }
  return [arr[0] * 2, ...doubleInput(arr.slice(1))];
};
// console.log(doubleArray([1, 2, 3]));

const reverseString = str => {
  if(str.length === 1){
    return str[0];
  }
  return [...reverseString(str.slice(-(str.length-1))), str[0]];
};
// console.log(reverseString('banana'));

function nthTriangular(n) {
  if (n === 1) {
    return 1;
  }
  return n + nthTriangular(n - 1);
}
// console.log(nthTriangular(5));






function stringSplitter(str, splitted){
  if(str.length < 1){
    return [];
  }
  if(str[0] === ','){
    return [...stringSplitter(str.slice(1))];
  }
  return [str[0] + stringSplitter(str.slice(1))];
}



console.log(stringSplitter('hello,timm,im jimm', ','));















function factorial(n){
  if(n === 0){
    return 1;
  }
  return n*factorial(n-1);
}
// console.log(factorial(5));

function fibonacci(n){
  if(n === 1){
    return 1;
  }
  if(n === 2){
    return 1;
  }
  return fibonacci(n-1)+fibonacci(n-2);
}
// console.log(fibonacci(7));

/*
  e   a   s   t
  ea  ae  se
  es  as  sa
  et  at  st
*/
function anagrams(str){

}
// anagrams('east');