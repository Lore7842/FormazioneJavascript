function countOnline(usersObj) {
  // Only change code below this line
  var count = 0;
  for (let user in usersObj){
    if (usersObj[user].online === true){
      count++;
    }
  }
  return count;
  // Only change code above this line
}