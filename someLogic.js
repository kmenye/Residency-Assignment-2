function someAnyLogic(arr1) {

    // some(any) returns true if at least one item in array matches the condition
    // in this case, if at least one element is even then some will return true
    const condition = (item) => {return item%2===0};

    for (let i = 0; i < arr1.length; i++) {
        
        // iterate over array, returning true at the first element that fulfills condition
        if (condition(arr1[i])) {
            return true;
        }
        
    }

    return false;
}

let myArr = [2,3,4,5];
let myArr2 = [1,3,5,7];

console.log(someAnyLogic(myArr));
// output will be true as at least one item is even

console.log(someAnyLogic(myArr2));
// output will be false, since no item in array2 matches condition