function isPrime(a) {
  for (var i = 2; i <= Math.sqrt(a); i++) {
    if(a % i === 0) return false;
  }
  return true;
}
function primeFactors(n){
    var res = 0;
    var arr = [];
    var str = '';
    for(var i=2; i<=Math.sqrt(n); i++){
      if(isPrime(i) && n % i == 0){
        var cnt = 0;
        while(n % i == 0){
          cnt++;
          n /= i;
        }
      if(cnt == 1){
        str += '(' + i + ')';
      } else {
        str += '(' + i + '**' + cnt + ')';
      }
    }
}
  if(n > 1){
     str += '(' + n.toString() + ')';
  }
  return str;
}

