function find_average(array) {
  var res = 0;
  for(var i = 0; i < array.length; i++){
    res += array[i];
  }
  res = res / array.length;
  return res;
}
