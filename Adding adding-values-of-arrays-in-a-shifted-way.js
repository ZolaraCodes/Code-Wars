/*
Description:
#Adding values of arrays in a shifted way
You have to write a method, that gets two parameter:
1. An array of arrays with int-numbers
2. The shifting value
#The method should add the values of the arrays to one new array.
The arrays in the array will all have the same size and this size will always be greater than 0.
The shifting value is always a value from 0 up to the size of the arrays.
There are always arrays in the array, so you do not need to check for null or empty./*

function addingShifted (arrayOfArrays, shift) {    
    var result = [];
    var endArrayLength = arrayOfArrays[0].length + shift * (arrayOfArrays.length - 1);
    for(var i=0;i<endArrayLength;i++)
    {
      result.push(0);
    }
        
    for(var i=0;i<arrayOfArrays.length;i++)
    {
      for(var j=0;j<arrayOfArrays[i].length;j++)          
      {
        result[j + shift * i] += arrayOfArrays[i][j];
      }          
    }
        
    return result;
}
