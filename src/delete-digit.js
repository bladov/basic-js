const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let result = n.toString();

  // проверка 3х значных number
  let one = +result.slice(1);
  let two = +result.slice(0, result.length - 1);
  let answer;
  (one > two) ? answer = one : answer = two;

// проверка 4х...Nx значных number
  let resultTwo = [...n.toString()];
  let copy = [...resultTwo]

  resultTwo.sort((a, b) => +a - +b);

  copy.splice(copy.indexOf(resultTwo[0]), 1);

  return (+copy.join('') > answer) ? +copy.join('') : answer;
}

module.exports = {
  deleteDigit
};
