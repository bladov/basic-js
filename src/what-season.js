const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {

  if(!arguments.length)  return 'Unable to determine the time of year!';
  if(Object.getPrototypeOf(date).constructor !==  Date) throw  new Error('Invalid date!');

  
  let season;

  try {
      season = date.getMonth();
      test = date.getUTCDay();
  } catch (e) {
    throw  new Error('Invalid date!');
  }


  if (season <= 1 || season == 11) {
    return 'winter'
  } else if (season <= 4) {
      return 'spring'
  } else if (season <= 7) {
      return 'summer'
  } else if (season <= 10) {
      return 'autumn'
  } else {
    throw  new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
