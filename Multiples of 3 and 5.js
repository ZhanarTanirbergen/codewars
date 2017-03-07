function solution(number){
    var a = 0;
    for(var i = 1; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0){
            a += i;
        }
    } 
    return(a);
}
