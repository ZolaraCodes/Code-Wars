//Create a function that takes an array of letters, and combines them into words in a sentence.

//The array will be formatted as so:

//[['J','L','L','M']
//,['u','i','i','a']
//,['s','v','f','n']
//,['t','e','e','']]


const arrAdder = arr =>  arr[0].map((_,i)=>  arr.map((_,j)=> arr[j][i]).join('')).join(' ');
