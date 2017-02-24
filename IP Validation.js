function isValidIP(str) {
  var cnt = 0, step = 0, b = true, res = "";
  console.log(str);
  for (var i = 0; i < str.length; i++) {
     if (str[i] === "." || i === str.length - 1) {
       cnt++;
       for(var j = i - step; j <= i; j++){
         if(str[j] === " ") {
            return false;
         } else {
           res += str[j];
         }
       }  
       if(Number(res) >= 0 && Number(res) <= 255 ) b = true;
       else b = false;
       res = "";
       step = 0;
     } else {
       step++;
     }
     if(!b) break; 
  }
  console.log(cnt);
  if (b && cnt === 4) {
    return true;
  }
  return false;
}
