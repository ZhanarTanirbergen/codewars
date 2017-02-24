function findOdd(A) {
  var cnt = 0;
  var arrayLen = A.length;
  for (var i = 0; i < arrayLen; i++) {
     for (var j = 0; j < arrayLen; j++) {
       if (A[j] === A[i]) {
         cnt++;
       }
     }
     if (cnt % 2 === 1 || cnt === 1) {
       res = A[i];
       break;
     }
     cnt = 0;
  }
  return res;
}