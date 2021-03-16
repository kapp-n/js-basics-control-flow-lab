function scuberGreetingForFeet(num){
  let result;
  if (num <= 400) {
    result = 'This one is on me!';

  } else if (num > 2000 && 2500 > num) {
    result = 'I will gladly take your thirty bucks.'
  } else if (num > 2500) {
    result = 'No can do.';
  }
  return result;
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(city){
  let destination;
  city === "NYC" ? (destination = "Ok, sounds good.") : (destination = "No go.");
  return destination;
  
}
ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');


function switchOnCharmFromTip(tip){
  let charm;
  switch (tip) {
    case 'generous' :
      charm = 'Thank you so much.';
      break;
    case 'not as generous' :
      charm = 'Thank you.';
      break;
    default:
      charm = "Bye."
  }
  return charm
}
switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('thanks for everything');
