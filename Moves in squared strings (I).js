function vertMirror(strng) {
       var res = "";
       var cnt = 0;
       for (var k = 0; k < strng.length; k++) {
         if(strng[k] === "\n" ) cnt++;
       }
       cnt++;
       for (var i = 0; i < strng.length; i++) {
         if (strng[i] === "\n") {
           for (var j = i - 1; j >= i - cnt; j--) { res += strng[j];}
           res += "\n";
         }
         if(i === strng.length - 1) for (var j = i; j > i - cnt; j--) { res += strng[j];}
       }
   return res;
}
function horMirror(strng) {
    var res = "";
    var cnt = 0;
    for (var k = 0; k < strng.length; k++) {
       if(strng[k] === "\n" ) cnt++;
    }
    cnt++;
    for (var i = strng.length - 1; i >= 0; i--){
      if(strng[i] === "\n"){
        for(var j = i + 1; j <= i + cnt; j++) {res += strng[j];}
        res += "\n";
      }
      if(i === 0) for(var j = i; j < i + cnt; j++) {res += strng[j];}
    }
    return res;
}
function oper(fct, s) {
    return fct(s);
}
