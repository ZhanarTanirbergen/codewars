function productFib(prod){
    var x = 0, y = 1, a = 0;
    var temp;
    while (a <= prod){
        if (a === prod){
            //write(a);
            return [x, y, true];
        } 
        else{
            z = x + y;
            x = y;
            y = z;
            a = x*y;
        }
    }
    
    return [x, y, false];
}
