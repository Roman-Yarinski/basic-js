
module.exports = function countCats(arr) {
  if(!arr) return false;
  return arr.reduce((sum, subArr) => {
    return sum + subArr.reduce((sum_sec, str) => {return str === '^^' ? sum_sec + 1 : sum_sec;}, 0);
  }, 0);
};