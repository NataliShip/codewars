// task: https://www.codewars.com/kata/loose-change-1/train/javascript

const CHANGE = {
  penny: 0.01,
  nickel: 0.05,
  dime: 0.10,
  quarter: 0.25,
  dollar: 1.00,
}

function changeCount(change) {
  let changeArray = change.split(' ');
  let sum = 0;
  changeArray.forEach(item => {
    switch (item) {
      case 'penny':
        sum += CHANGE.penny;
        break;
      case 'nickel':
        sum += CHANGE.nickel;
        break;
      case 'dime':
        sum += CHANGE.dime;
        break;
      case 'quarter':
        sum += CHANGE.quarter;
        break;
      case 'dollar':
        sum += CHANGE.dollar;
        break;
      default:
    }
  });
  return `$${sum.toFixed(2)}`
}

// tests 
Test.assertEquals(changeCount('dime penny dollar'), '$1.11')
Test.assertEquals(changeCount('dime penny nickel'), '$0.16')
Test.assertEquals(changeCount('quarter quarter'), '$0.50')
Test.assertEquals(changeCount('dollar penny dollar'), '$2.01')
Test.assertEquals(changeCount('dollar dollar dollar dollar dollar dollar dollar dollar dollar dollar penny'), '$10.01')