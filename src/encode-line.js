const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let arr = [...str];
  let result = '';
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] == arr[i]) {
          count++;
          continue
      }

      if (count != 1) {
          result  += count + arr[i]
          count = 1;
          continue
      }
      result += arr[i]
      count = 1;
  }

  return result
}

module.exports = {
  encodeLine
};
