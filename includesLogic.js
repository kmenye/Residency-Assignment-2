function includesLogic(arr1, target, startIndex) {

    // includes returns true if element is in array, starting from given search index
    if (startIndex === undefined) {
        startIndex = 0;
        // settng default value if none provided
    }

    else if (startIndex < 0) {
        startIndex*= -1;
        // if start index is negative, get absolute value
    }

    for (let i = startIndex; i < arr1.length; i++) {
        
        if (arr1[i] == target) {
            return true
        }
        
    }

    return false;
}

let myArr = [2,4,6,8];
let myArr2 = [1,2,3,4];
let myArr3 = [3,5,7,9,12];

console.log(includesLogic(myArr, 6));
// expected output:  true

console.log(includesLogic(myArr2, 1, 3));
// expected output:  false

console.log(includesLogic(myArr3, 5, 2));
// expected output:   false

console.log (includesLogic(myArr3, 5, -1));
// expected output:  true