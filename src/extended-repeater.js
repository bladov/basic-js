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
function repeater(/* str, options */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// function repeater(str, options) {
//   let result = [`${str}`];
//   let addition = [`${options.addition}`];

//   options.separator ? options.separator : options.separator = '+'
//   options.additionSeparator ? options.additionSeparator : options.additionSeparator = '|';


//   for (let i = 0; i < options.additionRepeatTimes; i++){
//       addition[i] = `${options.addition}`;
//   }

//   for (let i = 0; i < options.repeatTimes; i++){
//       if (!options.hasOwnProperty(addition)) {
//           result[i] = str;
//           continue;
//       }
//       result[i] = str + (addition.join(options.additionSeparator) || '');
//   }


//   return result.join(options.separator)

// }

module.exports = {
  repeater
};
