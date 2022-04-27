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
  if(!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  if (arr.length > 50) return arr;
    let copy = [...arr];
    let discardNext = '--discard-next';
    let discardPrev = '--discard-prev';
    let doubleNext = '--double-next';
    let doublePrev = '--double-prev';

    for (let i = 0; i < copy.length; i++) {
        if (copy[i] == discardNext && copy[i + 1] && Number.isInteger(copy[i + 1])) {
            copy.splice(i + 1, 1);
        } else if(copy[i] == discardPrev && copy[i - 1] && Number.isInteger(copy[i - 1])) {
            copy.splice(i - 1, 1);
        } else if(copy[i] == doubleNext && copy[i + 1] && Number.isInteger(copy[i + 1])) {
            copy.splice(i,0, copy[i + 1]);
        } else if(copy[i] == doublePrev && copy[i - 1] && Number.isInteger(copy[i - 1])) {
            copy.splice(i - 1,0, copy[i - 1]);
        }
    }

    return copy.filter(e => Number.isInteger(e));
}

module.exports = {
  transform
};
