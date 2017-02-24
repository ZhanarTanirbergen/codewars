function stringChunk(str, n) {
  var arr = [];
  if (n === 0) {
    return arr;  
  } 
  for(var i = 0; i < str.length / n; i++){
    arr.push(str.substring(n * i, n * i + n));
  }
  return arr;
}
