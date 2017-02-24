function accum(s) {
	var resString = "";
  for (var i = 0; i < s.length; i++) {
    for (var j = 1; j <= i + 1; j++) {
      if (j === 1 ) {
        resString += s[i].toUpperCase();
      } else {
        resString += s[i].toLowerCase();
      }  
    }
    if(i !== s.length - 1) {
        resString += "-";
    }
  }
  return resString;
}