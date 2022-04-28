const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`)
  let copy = [...arr];
  let result = [];
  let discardNext = '--discard-next';
  let discardPrev = '--discard-prev';
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';

  let avoid = 0;

  for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
          case (discardNext):
              i++;
              avoid++;
              break;
          case (discardPrev):
              if (avoid == 1) {
                  avoid = 0;
                  break;
              }
              result.pop();
              break;
          case (doubleNext):
              if (avoid == 1) {
                  avoid = 0;
                  break;
              }
              if (i == arr.length - 1) break;
              result.push(arr[i + 1]);
              break;
          case (doublePrev):
              if (!result.length) {
                  break;
              }
              if (avoid == 1) {
                  avoid = 0;
                  break;
              }
              result.push(result[result.length - 1]);
              break;
          default:
              if (avoid == 1) {
                  avoid = 0;
              }
              result.push(arr[i]);
              break;
      }
  }

  return result;
}

module.exports = {
  transform
};
