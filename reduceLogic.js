function reduceLogic(arr1, initialVal) {

    // the reduce method takes an initial value and accumulates it by adding each item of target array to it
    let reduced = initialVal;

    for (let i = 0; i < arr1.length; i++) {

        reduced+= arr1[i];
        
    }

    return reduced;
}

let myArr = [2,4,6,8];
let myArr2 = [1,2,3,4];

console.log(reduceLogic(myArr,0));
// expected output:   20

console.log(reduceLogic(myArr2,5));
// expected output:  15