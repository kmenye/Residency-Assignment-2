function pushLogic(arr1, toPush) {
    // push appends element to end of target array and returns new legnth of array
    arr1[arr1.length] = toPush;

    return arr1.length;
}

let myArr = [2,3,4,5];

console.log(pushLogic(myArr, 6))
// expected output:  5

console.log(myArr);
// expected output:  [2,3,4,5,6]