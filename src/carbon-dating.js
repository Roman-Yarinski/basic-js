const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // remove line with error and write your code here
  let sampleActivityNF = parseFloat(sampleActivity);
  if (typeof sampleActivity === 'string' && sampleActivityNF > 0 &&  sampleActivityNF <= 15) {
    return  Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivityNF)) / (0.693 / HALF_LIFE_PERIOD))
  } else return false;
};
