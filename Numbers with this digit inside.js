function numbersWithDigitInside(x, d) {
 var arr = [], cnt = 0;
 if( x < d) {
   return arr = [0, 0, 0];
 } else {
   var sum = 0, mul = 1;
   console.log(x, d);
   for(var i = 1; i <= x; i++){
     var o = i.toString();
     var d = d.toString();
     for(var j = 0; j < o.length; j++){
       if(o[j] === d){
         console.log(o[j]);
         cnt++;
         var n = Number(o);
         sum += n;
         mul *= n;
         break;
       }
     }
   }
   if(mul === 1) mul = 0;
   var res = [cnt, sum, mul];
   return res;
 }
}
