//In this kata, your task is to create a regular expression capable of evaluating binary strings (strings with only 1s and 0s) and determining whether the given string represents a number divisible by 3.

// Regular expression that matches binary inputs that are multiple of 3
var multipleOf3Regex = /^(1(01*0)*1|0)*$/;