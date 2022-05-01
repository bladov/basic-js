const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// function repeater(/* str, options */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function repeater(str, options) {
  let string = `${str}`;
  let additionArr;
  let result = [];


   if (!options.hasOwnProperty('separator')) {
       options.separator = '+';
   }

   if (!options.hasOwnProperty('additionSeparator')) {
       options.additionSeparator = '|';
   }

   //merge down
  //  if (options.hasOwnProperty('addition')) {
  //      options.addition = `${options.addition}`;
  //  }

   if(options.hasOwnProperty('addition')) {
       options.addition = `${options.addition}`;

       if(options.hasOwnProperty('additionRepeatTimes')) {
           additionArr = [];
           for (let i = 0; i < options.additionRepeatTimes; i++) {
               additionArr[i] = options.addition;
           }

           additionArr = additionArr.join(options.additionSeparator)
       } else {
           additionArr = options.addition
       }
   }

   if (options.hasOwnProperty('repeatTimes')) {
       for (let i = 0; i < options.repeatTimes; i++) {
           if (additionArr) {
               result[i] = string + additionArr;
               continue;
           }

           result[i] = string;
       }
   } else {
        result[0] = string + additionArr || '';
    }

  return result.join(options.separator)
}

module.exports = {
  repeater
};
