What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words.

function anagrams(word, words) {
    let result = [];
    for (i=0;i<words.length;i++) {
      if(check(word,words[i])) {
        result.push(words[i]);
      }
    }
    return result;
  }
  
  function check(a, b) {
    const aArray = a.split('');
    const bArray = b.split('');
    console.log(aArray.sort().join(''));
    console.log(bArray.sort().join(''));
    return (aArray.sort().join('') == bArray.sort().join(''));
  }
