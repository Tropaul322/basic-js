const chainMaker = {
  arr : [],
  getLength() {
    return this.arr.length;
  },
  addLink(value = " ") {
    if(value == null) {
      value = 'null'
    }
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if((!Number.isInteger(position))  (position < 1)  (position >this.arr.length)) {
      this.arr = [];
      throw "Error";
    }
    this.arr.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    var newArr = this.arr.slice();
    this.arr = [];
    return "( " + newArr.join(' )~~( ') + " )";
  }
};

module.exports = chainMaker;
