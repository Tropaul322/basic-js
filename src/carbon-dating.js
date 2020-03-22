var MODERN_ACTIVITY= 15; 
var HALF_LIFE_PERIOD= 5730;
var k = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  var b = parseFloat(sampleActivity)
  if (/[a-zA-z]/.test(sampleActivity) == true){
      return false
  }
  if (sampleActivity > MODERN_ACTIVITY) return false;
  if (sampleActivity <= 0) return false;
  if (typeof sampleActivity !== 'string'){
   return false
  }
  var age = Math.ceil(Math.log(MODERN_ACTIVITY/b) / k);
   return  age  
};
