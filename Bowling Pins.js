function setCharAt(str,index,chr) {
    return str.substr(0,index) + chr + str.substr(index+1);
}
function bowlingPins(arr){
  var str = "I I I I\n I I I \n  I I  \n   I   ";
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === 1) str = setCharAt(str, 27, " "); 
    else if(arr[i] === 2) str = setCharAt(str, 18, " ");
    else if(arr[i] === 3) str = setCharAt(str, 20, " ");
    else if(arr[i] === 4) str = setCharAt(str, 9,  " ");
    else if(arr[i] === 5) str = setCharAt(str, 11, " ");
    else if(arr[i] === 6) str = setCharAt(str, 13, " ");
    else if(arr[i] === 7) str = setCharAt(str, 0, " ");
    else if(arr[i] === 8) str = setCharAt(str, 2, " ");
    else if(arr[i] === 9) str = setCharAt(str, 4, " ");
    else str = setCharAt(str, 6, " ");
  }
  return str;
}
