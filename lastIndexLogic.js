function lastIndex(str, target) {

    // last index returns the last index of target in a given string
    words = str.split(' ');
    let resultIndex;

    for (let i = 0; i < words.length; i++) {

        if (words[i] == target) {
            resultIndex = i;
        }
        
        else {
            resultIndex = -1;
        }
    }

    return resultIndex;
}

let myStr = 'mary had a little mary';

console.log(lastIndex(myStr, 'dog'));
// expected output:  -1

console.log(lastIndex(myStr, 'mary'));
// expected output:  4