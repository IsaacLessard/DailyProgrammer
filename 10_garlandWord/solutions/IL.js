function garland(str) {
    var found = str.slice(0,1)
    var begin = str
    str = str.slice(1)
    for(i=1;i<str.length;i++){
        if (str.indexOf(found) > -1) {
        found += str.slice(0,1)
        str = str.slice(1)
        begin = begin.slice(1)
      }
    }
    if (begin === found){
         return found.length
    }  else {
        return found.length - 1
    }
    
}
