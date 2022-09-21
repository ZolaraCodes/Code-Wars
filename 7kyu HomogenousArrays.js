//Challenge:

//Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

//Example:

//Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].

function filterHomogenous(arrays) {
  const arr=arrays.filter(v=>v.every((v,i,arr)=>typeof v === typeof arr[0]))
  return arr.filter(v=>v.length!==0);
}
