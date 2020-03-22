module.exports =  function countCats(a) {
  var b=0;

  for (i=0;i<a.length;i++){
    for (y=0;y<a[i].length; y++){
       if (a[i][y]== '^^'){
           b++
       } else{continue}
    } 
    
  }
 return b
};
