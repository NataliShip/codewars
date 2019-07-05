// task: https://www.codewars.com/kata/decode-the-morse-code/train/javascript

decodeMorse = function (morseCode) {
  const morseArr = morseCode.split(' ');
  let result = '';
  for (let i = 0; i < morseArr.length; i++) {
    const letter = MORSE_CODE[morseArr[i]];
    if (letter) {
      result += letter;
    } else if (morseArr[i - 1]) {
      result += ' ';
    }
  }
  result = result.trim();
  return result;
}

// tests

Test.describe("Example from description", function(){
  Test.assertEquals(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
  });
