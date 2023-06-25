// Create a function that reverses a string
// Hi My name is Dadabhau
var checkString = '';
var checkString1 = '';
function reverse(str) {
    // check input
    if (!str || str.lenght < 2 || typeof str !== 'string') {
        return 'That not good'
    }
    const backwards = [];
    const totalItem = str.length - 1;
    for (let i = totalItem; i >= 0; i--) {
        backwards.push(str[i]);
    }
    console.log(backwards)
    return checkString = backwards.join('');
}
reverse('Hi, My name is Dadabhau')
console.log(checkString)


// Second Solution 

function reverse1(str) {
    return checkString1 = str.split('').reverse().join('')
}
reverse1('Hi, My name is Dadabhau')
console.log(checkString1)

// Third solution 
const reverse3 = str => str.split('').reverse().join()

reverse3('Hi, My name is Dadabhau')
console.log(reverse3)


// NEXT QUESTION
// merge sorted array [0,3,4,31] and [4,6,5,49,60]
let array1 = [0, 3, 4, 31];
let array2 = [4, 6, 5, 49, 60]
function mergeSortedArray(arr1, arr2) {
    const mergedArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 1;
    let j = 1;
    // Check Input
    if (arr1.lenght === 0) {
        return arr2
    }
    if (arr2.lenght === 0) {
        return arr1
    }
    while (array1Item || array2Item) {
        if (array1Item < array2Item) {
            mergedArray.push(array1Item)
            array1Item = arr1[i];
            i++;
        } else {
            mergedArray.push(array2Item)
            array2Item = arr2[j];
            j++;
        }
    }
    console.log(mergedArray)
    return mergedArray;
}
mergeSortedArray(array1, array2)
