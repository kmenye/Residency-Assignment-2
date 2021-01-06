
function foo(...args) {
    return args*2;
}

function mapLogic(arr1,varFunc) {

    let returnArr=[];

    for (let i = 0; i < arr1.length; i++) {
        
        // map does not mutate the array it operates on
        // push function value of each item in target array to local array
        returnArr.push(varFunc(arr1[i]));
    }

    return returnArr;
}

let myArr = [2,3,4,5];

console.log(mapLogic(myArr,foo));

// original array is unchanged
console.log(myArr);