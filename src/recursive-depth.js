const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  // constructor() {
  //     this.depth = 0;
  //     this.result = 0;
  // }
  // calculateDepth(arr) {

  //     arr.forEach(item => {
  //         if (Array.isArray(item)){
  //           if( this.result > this.depth) {
  //             this.depth = this.result;
  //         }

  //             this.result++;
              
  //             this.calculateDepth(item);
  //         }
  //     })
  //     this.result = 0;
  //     return this.depth + 1;
  // }
}

module.exports = {
  DepthCalculator
};
