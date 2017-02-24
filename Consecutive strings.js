function longestConsec(strarr, k){
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
      return "";
    } else {
        var max = 0;
        for (var i = 0; i <= strarr.length - k; i++) {
          var concat = "";
          var cnt = 0;
          while(cnt < k){
            concat += strarr[i + cnt];
            cnt++;
          }
          if(concat.length > max) {
            max = concat.length;
            res = concat;
          }
        }
      return res;
    }
}
