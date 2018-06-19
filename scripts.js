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
  return [arr[0] * 2, ...doubleArray(arr.slice(1))];
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

function splitString(str, sep){
  if(str.indexOf(sep) < 0){
    return [str];
  }
  return [str.substr(0, str.indexOf(sep)), 
    ...splitString(str.substr(str.indexOf(sep)+1), sep)];
}
// console.log(splitString('hello im jimm', ' '));

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
// function anagrams(str, pre){
//   let n = str.length;
//   if(n === 0){
//     return console.log(pre);
//   }
//   for(let i = 0; i < n; i++){
//     anagrams(pre+str[i], str.substr(0, i)+str.substr(i+1, n));
//   }
// }
// anagrams('east', '');

function anagrams(prefix, str){
  if(str.length <= 1){
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for(let i=0; i<str.length; i++){
      let currentLetter = str.substring(i, i+1); 
      let previousLetters = str.substring(0,i);
      let afterLetters = str.substring(i+1);
      anagrams(prefix+currentLetter, previousLetters+afterLetters);
    }
  }
}
function printAnagram(word){
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);

}
printAnagram('east');



const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
];
// ==============================
function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy.filter(item => item.parent === parent).forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
}
//console.log(traverse(animalHierarchy, null));