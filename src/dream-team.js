module.exports = function createDreamTeam( members ) {
  // remove line with error and write your code here
  if (!Array.isArray( members)) {
    return false;
  }
  let team_name = members.filter(item => typeof item === 'string').map(item => item.trim().toUpperCase()[0]).sort()
  return team_name.join('');
};