// Function that returns a collection of primes up to a given number
const sieveOfEratosthenes = (int) => {
    // Initialize some values
    const primes = [...Array(int + 1).keys()].slice(2);
    const sqrtCeil = Math.sqrt(int);
    let p = primes[0];
    let pIndex = 0;
    let factor = 2;
  
    // Until index refers to the last element, sieve primes
    while (primes[pIndex] < sqrtCeil) {
      const productIndex = primes.indexOf(factor * p);
  
      if (productIndex > -1) {
        primes.splice(productIndex, 1);
      }
  
      factor += 1;
  
      if (factor * p > primes[primes.length - 1]) {
        factor = 2;
        pIndex += 1;
        p = primes[pIndex];
      }
    }
  
    return primes;
  };
  
  function sumOfDivided(lst) {
    // If the input is empty, return an empty list
    if (lst.length === 0) {
      return [];
    }
  
    // Generate primes with a ceiling of the highest number in the input,
    // accounting for negative numbers
    const primes = sieveOfEratosthenes(
      Math.max(...lst.map((int) => (int < 0 ? int * -1 : int)))
    );
  
    // Reduce primes array to array of tuples, value one being being the prime,
    // value two being the sum of numbers it was a prime factor for in the input
    return primes.reduce((acc, prime) => {
      // Initialize values
      let sum = 0;
      let primeFactorCount = 0;
  
      // Check if each integer in the input had this prime as a factor
      for (let int of lst) {
        if (prime > int && int > 0) {
          continue;
        }
  
        if (int % prime === 0) {
          sum += int;
          primeFactorCount += 1;
        }
      }
  
      // If at least one number matched, add the tuple to the array
      if (primeFactorCount > 0) {
        return [...acc, [prime, sum]];
      }
  
      return acc;
    }, []);
  }
  
  