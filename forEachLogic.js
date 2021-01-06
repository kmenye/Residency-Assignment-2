function foo(...args) {
    return args*2;
}

function forEachLogic(arr1,varFunc) {

    let returnArr=[];

    for (let i = 0; i < arr1.length; i++) {
        
        // perform variable function on parameter array at index i
        // push each mutated value into return array
        returnArr.push(varFunc(arr1[i]));
    }

    return returnArr;
}

let myArr = [2,3,4,5];

console.log(forEachLogic(myArr,foo));