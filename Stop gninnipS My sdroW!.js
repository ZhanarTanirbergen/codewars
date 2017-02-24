function spinWords(words){
    words = words.split(' ');
    for(var i=0, item; item=words[i]; i++) {
        if(item.length >=5) words[i] = item.split('').reverse().join('');
    }
    return words.join(' ');
}
