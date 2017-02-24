function compareNumeric(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
}
var maxRedigit = function(num) {
  var str = num.toString();
  var b = true;
  for(var i = 0; i < str.length; i++){
    if(str[i] === "-" || str.length === 1 || str.length != 3) b = false;
  }
  if (b) {
    var digits = str.split("");
    digits.sort(compareNumeric);
    digits = digits.join("");
    return Number(digits);  
  } else return null;
  
};
