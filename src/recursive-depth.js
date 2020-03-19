module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let num = 1;
    let res = 0;
    for (let i = 0; i <= arr.length; i++) {
      if (Array.isArray(arr[i])) {
        num = this.calculateDepth(arr[i]);
        if(res < num) res=num;
        else res = res;
      }
    }
    return ++res;
  }
};