let integerPairs = function(array, k){
  let pairArray = [];
  for (i = 0; i<array.length; i++){
    let sum = k-array[i];
    for (j = 0; j<array.length; j++){
      if (array[j] === sum){
        let arrayObject = `${array[i]}, ${array[j]}`
        pairArray.push(arrayObject)
      }
    }
  }
  console.log('array:' + pairArray);
  return pairArray;
}

// console.log
integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);