function everyLogic(arr1) {

    // every() returns true if every item in array matches the condition
    // in this case, if all elements are even then every will return true
    const condition = (item) => {return item%2===0};

    for (let i = 0; i < arr1.length; i++) {
        
        // iterate over array, returning false at the first element that does not fulfill condition condition
        if (condition(arr1[i]) === false) {
            return false;
        }
        
    }

    return true;
}

let myArr = [2,4,6,8];
let myArr2 = [2,4,6,9];

console.log(everyLogic(myArr));
// output will be true because all items are even

console.log(everyLogic(myArr2));
// output will be false, because the last element is not even