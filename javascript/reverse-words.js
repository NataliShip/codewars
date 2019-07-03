// task: https://www.codewars.com/kata/reverse-words/train/javascript

function reverseWords(str) {
  const wordsArr = str.split(' ');
  let result = [];
  wordsArr.forEach(item => {
    let word = item.split('');
    word = word.reverse().join('');
    result.push(word)
  })

  return result.join(' ')
}

// tests 
Test.describe('Sample Tests', _ => {
  Test.it('Should pass Sample tests', _ => {
    Test.assertEquals(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    Test.assertEquals(reverseWords('apple'), 'elppa');
    Test.assertEquals(reverseWords('a b c d'), 'a b c d');
    Test.assertEquals(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});