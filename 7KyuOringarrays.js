//If one array is shorter than the other, use the optional third parameter (defaulted to 0) to OR the unmatched elements.

//For example:

//orArrays([1,2,3],[1,2,3]) === [1,2,3]
//orArrays([1,2,3],[4,5,6]) === [5,7,7]
//orArrays([1,2,3],[1,2]) === [1,2,3]
//orArrays([1,2],[1,2,3]) === [1,2,3]
//orArrays([1,2,3],[1,2,3],3) === [1,2,3]


function orArrays(arr1, arr2, or) {
    return arr1.length > arr2.length
      ? arr1.map((x, i) => x | (arr2[i] || or))
      : arr2.map((x, i) => x | (arr1[i] || or));
  }
 