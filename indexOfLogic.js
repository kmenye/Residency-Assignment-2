function indexOfLogic(arr1, target, startIndex) {

    // indexOf returns index of element in array, starting from given search index
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
            return i;
        }
        
    }

    return -1;
}

let myArr = [2,4,6,8];
let myArr2 = [1,2,3,4];
let myArr3 = [3,5,7,9,12];

console.log(indexOfLogic(myArr,4));
// expected output:  1

console.log(indexOfLogic(myArr2,1,2));
// expected output:  -1