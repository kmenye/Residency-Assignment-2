function foo(...args) {
    return args*2;
}

function forEachLogic(arr1,varFunc) {

    // forEach mutates the array is operates on
    // iterate over array and apply variable function to each item
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = varFunc(arr1[i]);
    }
}

let myArr = [2,3,4,5];

forEachLogic(myArr,foo);

console.log(myArr);