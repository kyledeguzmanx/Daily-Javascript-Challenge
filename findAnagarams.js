function anagrams(word, words) {
    const template = word.split('').sort().join('');
    const array = [];
    for(let i=0; i < words.length; i++){
      if(words[i].split('').sort().join('') === template)
        array.push(words[i]);
    }
    return array;
  
  }
  