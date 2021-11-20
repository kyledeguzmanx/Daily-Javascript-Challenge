
/*

This function identifies anagram(s) of a word in a given array.
For example:
Word: Anna      Array: ['abcd', 'aann', 'nana', 'naaa', 'nnaa']
The anagrams in the array are aann, nana, nnaa. It will return an array of these anagrams.
If there are no anagrams, it will return an empty array []

*/

function anagrams(word, words) {
    const template = word.split('').sort().join('');
    const array = [];
    for(let i=0; i < words.length; i++){
      if(words[i].split('').sort().join('') === template)
        array.push(words[i]);
    }
    return array;
  
  }
  