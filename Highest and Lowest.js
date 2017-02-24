function highAndLow(numbers){
  var min, max, a, b;
  var arr = numbers.split(" ");
  min = Number(arr[0]);
  max = Number(arr[0]);
  for(var i = 0; i < arr.length; i++){
    a = Number(arr[i]);
    if (a > max) max = a;
  }
  for(var i = 0; i < arr.length; i++){
    b = Number(arr[i]);
    if (b < min) min = b;
  }
  return(max + " " + min);
  
}