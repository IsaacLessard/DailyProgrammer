function garland(str) {
    var found = str.slice(0,1)
    console.log(found)
    for(i=1;i<str.length;i++){
        if (str.indexOf(found) > -1) {
        console.log(found);
        str = str.slice(1)
        found += str.slice(0,1)
        
        console.log(found);
    }
    }
    if(str.includes(found)) {
        console.log(str)
    if (str === found){
        return found.length
    }
    return found.length - 1
    } else {
        return 0
    }
    
}
