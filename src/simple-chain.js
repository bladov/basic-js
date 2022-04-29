const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],

  getLength() {
      return this.chain.length
  },

  finishChain() {
      let result = this.chain.join('~~');
      this.chain = [];
      return result;
  },

  addLink(value = '') {
      this.chain.push(`( ${value} )`)
      return this
  },

  removeLink(position) {
      if(typeof position != 'number' ||
         !Number.isInteger(position) ||
          this.chain[position - 1] == undefined)
          {
            this.chain = [];
            throw  new Error("You can't remove incorrect link!")
          }

      this.chain.splice(position - 1, 1);

      return this
  },

  reverseChain (){
      this.chain.reverse();

      return this
  },
};

module.exports = {
  chainMaker
};
