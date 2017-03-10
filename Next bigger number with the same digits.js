nextBigger(55);
function nextBigger(n){
    var a = [];
    var bool = 0;
    while(n > 0){
        a.push(n % 10);
        n = parseInt(n/10);
    }
    a.reverse();
    /*for(var i = 0; i < a.length; i++){
        write(a[i] + ' ');
    }*/
    var b = 99999999;
    for(var i = a.length - 1; i >= 0; i--){
        if(a[i] > a[i-1]){
            bool = 1;
            //write(a[i-1] + "и" + a[i] + " нуль " + a[0] + "\n");
            for(var j = a.length - 1; j > i-1; j--){
                if(a[j] > a[i-1]){
                    if(b > a[j]){
                        b = a[j];
                        ind = j;
                    }
                }
            }
            //write(b + "\n");
            var t = a[i-1];
            a[i-1] = a[ind];
            a[ind] = t;
            
            var c = [];
            for(var l = a.length - 1; l > i-1; l--){
                c.push(a[l]);
            }
            c.sort( function(q, w) {
                if(q > w){return 1;} 
                if(q < w){return -1;} 
                if(q === w){return 0;}
            });
            /*for(var z = 0; z < c.length; z++){
                write(c[z] + ' ');
            } */  
            //write("\n");
            for(var l = i; l < a.length; l++){
                a[l] = c[l-i];
            }
            
            
            break;
        }
        else{
            
        }
    }
    if(bool === 0){
        return -1;
    }
    
    var ans = "";
    for(var i = 0; i < a.length; i++){
        ans = ans.concat(a[i].toString());
    }
    //write(ans);
    return parseInt(ans);
}
