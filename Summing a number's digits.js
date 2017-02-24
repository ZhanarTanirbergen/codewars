function sumDigits(number) {
  var a = Math.abs(number);
  var str = a.toString();
  var res = 0;
  for(var i = 0; i < str.length; i++){
      var b = Number(str[i]);
      res += b; 
  }
  return res; 
}
