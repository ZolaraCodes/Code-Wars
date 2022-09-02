
//the string should start with a 1.

//a string with size 6 should return :'101010'.

//with size 4 should return : '1010'.

//with size 12 should return : '101010101010'.

//The size will always be positive and will only use whole numbers.

const stringy = (size) => '10'.repeat(Math.floor(size / 2)) + '1'.repeat(size % 2);