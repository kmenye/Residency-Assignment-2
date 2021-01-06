function forFilterLogic(arr1) {

    let returnArr=[];

    for (let i = 0; i < arr1.length; i++) {
        
        // if(some condition) === true for given array at index i, push to return array
        // in this case, only push numbers to return array  if number at index i is even
        if (arr1[i] % 2 === 0) {
            returnArr.push((arr1[i]));
        }
        
    }

    return returnArr;
}

let myArr = [2,3,4,5];

// the diplayed array will be [2,4]
console.log(forFilterLogic(myArr));