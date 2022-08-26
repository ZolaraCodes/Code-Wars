//Write a program that will calculate the number of trailing zeros in a factorial of a given number.//

//N! = 1 * 2 * 3 *  ... * N//

//Be careful 1000! has 2568 digits...//

//For more info, see: http://mathworld.wolfram.com/Factorial.html//




function zeros (n) {
var result = 0;
    while (n = Math.floor(n / 5)) result += n;
    return result;
}
