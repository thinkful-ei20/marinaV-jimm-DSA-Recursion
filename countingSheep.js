function countSheep(num){
  // base case
  if(num < 1){
    return;
  }

  console.log(`${num} - Another sheep jump over the fence`);

  // call with decremented number
  return countSheep(num-1);
}

countSheep(3);