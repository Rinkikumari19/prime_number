var count = 0;
var result;
function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count --;
      break;
  }
  if(count > 0){
    return (count + " " + "Bet");
  }
  else{
    return (count + " " + "Hold");
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
console.log(cc(7)); //cc(3); cc(7); cc('K'); cc('A');
console.log(cc(8));
console.log(cc(9));
//console.log(cc(5));
//console.log(cc(6));