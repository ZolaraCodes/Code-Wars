
//Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.//
//Example:
//Given an input string of://
//apples, pears # and bananas//
//grapes
//bananas !apples//
//The output expected would be://
//apples, pears//
//grapes//
//bananas//
function solution(input, markers) {

  var comments = input.split('\n');

  for (var i in markers) {

    for (var j in comments) {

      var line = null;

      var idx = comments[j].indexOf(markers[i]);

      if (idx >= 0) {

        comments[j] = comments[j].substring(0, idx).trim();

      } 

    }
  }
  return comments.join('\n');

};
 Impres