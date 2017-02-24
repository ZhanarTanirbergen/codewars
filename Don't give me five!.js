function dontGiveMeFive(start, end)
{
    var cnt = 0;
    console.log(start, end);
    for(var i = start; i <= end; i++){
      var o = i.toString();
      for(var j = 0; j < o.length; j++){
        if(o[j] === "5") { cnt++; break;}  
      }
    }
    return end - start - cnt + 1;
}
