function objKey(obj) {
    
    var keys = [];
    for (var key in obj) {
        keys.push(key);
    }
    
    return keys;
}

let myObject = {
    a:'42',
    b:'20',
    c:'15'
}

console.log (objKey(myObject));