function foldArray(array, runs)
{
  var res = [];
  var end = 0;
  var last = null;
  while (runs--) {
    if(array.length % 2 === 0) end = array.length / 2;
    else end = (array.length / 2) - 0.5, last = array[end];
    for (var i = 0; i < end; i++) {
       res.push(array[i] + array[array.length - 1 - i]);
    }
    if(last !== null) res.push(last);
    array = [];
    for(var j = 0; j < res.length; j++) {
      array[j] = res[j];
    }
    res = [];
    last = null;
  }
  return array;
}
