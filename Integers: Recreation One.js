function listSquared(m, n) {
    var x = 0;
    var a = [];
    for(var i = m; i <= n; i++){
        x = 0;
        for(var j = 1; j < Math.floor(Math.sqrt(i)) + 1; j++){
            
            if(i % j === 0){
                x += j*j;
                if(j != i/j){
                    x += (i/j)*(i/j);
                }
            }
        }
        if(x === Math.floor(Math.sqrt(x)) * Math.floor(Math.sqrt(x)) ){
            a.push([i,x]);
            //write(i + " " + x + " ")
        }
        
    }
    return a;
   
}
