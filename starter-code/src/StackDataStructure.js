function StackDataStructure(stack, max = 1) {
  this.stackControl = [];
  this.MAX_SIZE = max;   //placeholder number value
  this.stackOverflow = function (stack) {
    if (this.stackControl.length > this.MAX_SIZE) {
      return true
    }
    return this.stackControl
  }
  this.isEmpty = function (stack) {
    if (this.stackControl.length == 0) {
      return true;
    }
    return false;
  }
  this.canPush = function (stack) {
    if (this.stackControl < this.MAX_SIZE)
      return true;
    else {
      return false;
    }
  }
  this.push = function (stack) {
    this.stackControl.push(stack);
    // return this.stackOverflow;
    if (this.stackOverflow() === true) {
      return "Stack Overflow"
    }
    return this.stackControl;
  }


  this.pop = function (stack) {
    var popped = this.stackControl.pop(stack)
    if (this.stackControl.length === 0) {
      return "Stack Underflow"
    }
    return popped;
  }
}
