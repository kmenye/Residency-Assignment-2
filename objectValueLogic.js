function objvalues(obj) {
    
    var values = [];
    for (var value in obj) {
        values.push(obj[value]);
    }
    
    return values;
}

let myObject = {
    a:'42',
    b:'20',
    c:'15'
}

console.log (objvalues(myObject));