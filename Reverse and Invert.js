function reverseInvert(array){
  var ints = [], res = [];
  for (var i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i])) ints.push(array[i]);
  }
  for (var j = 0; j < ints.length; j++) {
    
      var a = ints[j].toString();
      var b = a.split("").reverse().join("");
      if (ints[j] >= 0) {
        var c = "-" + b;;
        res.push(Number(c));
      } else {
        var c = b.slice(0, -1);
        res.push(Number(c));
      }
  }
  return res;
}
