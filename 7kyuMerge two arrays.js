//Write a function that combines two arrays by alternatingly taking elements from each array in turn.



function mergeArrays(a, b) {
  const maxLength = Math.max(a.length, b.length);
  let result = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(a[i]);
    result.push(b[i]);
  }

  return result.filter((value) => value !== undefined);
}
