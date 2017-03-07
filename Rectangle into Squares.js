function sqInRect(lng, wdth){
    if(lng === wdth){
      return null;
    }
    var ans = [];
    while(lng != wdth){
        ans.push(Math.min(lng, wdth));
        if(lng > wdth){ 
            lng -= wdth;
        }
        else{
          if(lng < wdth){
              wdth -= lng;
          }
        }

    }
    ans.push(ans[ans.length - 1]);
    return ans;
}
