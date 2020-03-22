module.exports = function createDreamTeam(members) {
  var name = [];
  if (members === null || members === undefined){
      return false
  }
  if (typeof members[0] != 'string' && typeof members[0] != 'object' ){
      return false
  }
  for (var i = 0; i < members.length; i++){
      if (typeof members[i] === 'string' ){
      members[i] = members[i].replace(/ /g,'');
      name.push(members[i][0].toUpperCase());
      name.sort()
       var b = name.join('')
      }
      }
      return b
};
