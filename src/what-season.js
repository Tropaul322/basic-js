module.exports = function getSeason(date = 'aaa') {
  if (date == 'aaa'){
    return 'Unable to determine the time of year!';
  }
  if ( typeof date.getTime !='function'){
    throw 'Error';
  }
  var regExp = /[a-z]+\s[a-z]+\s\d+\s(\d+)\s/i;
    if(Number(date.toString().match(regExp)[1]) != date.getFullYear()){
        throw 'Error';
    }
  var month = date.getMonth();
  switch(month){
    case 11:
    case 0:
    case 1:
        return 'winter';
    break;
    case 2:
    case 3:
    case 4:
      return 'spring';
    break;
    case 5:
    case 6:
    case 7:
      return 'summer';
    break;
    case 8:
    case 9:
    case 10:
      return 'autumn';
      break;
  }
  
};
