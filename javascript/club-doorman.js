// task: https://www.codewars.com/kata/club-doorman/train/javascript

function passTheDoorMan(word) {
  let text = word.split("");
  let letter = '';
  text.some((val, i, arr) => {
    if (arr.lastIndexOf(val) === i - 1 || arr.lastIndexOf(val) === i + 1) {
      letter = val;
    }
  });
  function getNumberOfLetter(letter) {
    const startPos = 'a'.charCodeAt(0);
    const currentPos = letter.toLowerCase().charCodeAt(0);
    return currentPos - startPos + 1;
  }

  const num = getNumberOfLetter(letter);
  return num * 3
}


// tests
describe("Club Doorman", function () {
  it("Basic Tests", function () {
    Test.assertSimilar(passTheDoorMan("lettuce"), 60);
    Test.assertSimilar(passTheDoorMan("hill"), 36);
    Test.assertSimilar(passTheDoorMan("apple"), 48);
  });
});   