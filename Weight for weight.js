function orderWeight(strng) {
    var a = [];
    var x = 0, y = 0, z = "";
    for(var i = 0; i < strng.length; i++){
        if(strng[i] === " "){
            a.push([x,y,z]);
            x = 0;
            y = 0;
            z = "";
        }
        else{
            x = x*10 + parseInt(strng[i]);
            y += parseInt(strng[i]);
            z = z.concat(strng[i]);
        }
    }
    a.push([x,y,z]);
        a.sort( function(q, w) {
            if(q[1] > w[1]){return 1;} 
            if(q[1] < w[1]){return -1;} 
            if(q[1] === w[1]){
                if(q[2] > w[2]){return 1;} 
                if(q[2] < w[2]){return -1;} 
                if(q[2] === w[2]){return 0;}
            }                     
        } 
    );
    
    var b = "";
     b = b.concat(a[0][2]);
    for( i = 1; i < a.length; i++){ 
        b = b.concat(" " + a[i][2]);
    }
    return b;
}
