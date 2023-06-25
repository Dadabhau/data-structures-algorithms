// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false.
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];
function containsCommonItem(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        //console.log(arr1[i])
        for (let j = 0; j < arr2.length; j++) {
            // console.log(arr2[i]);
            if (arr1[i] === arr2[j]) {
                console.log('Match Found ' + arr1[i], arr2[j]);
                return true;
            }
        }
    }
    // console.log('matches not found')
    return false
} // O(a * b) that is O(n ^ 2)
//O(1) - Space Complexity
containsCommonItem(array1, array2)


// Second Solution
function containsCommonItem2(arr1, arr2) {
    //loop through first array and create object where properties === items in the array
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    //loop through second array and check if item in second array exists on created object.
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            console.log('Match Found ' + arr2[j])
            return true
        }
    }
    console.log('Match Not Found')
    return false
} // O(a+b) time complexity better
//O(a) Space Complexity
containsCommonItem2(array1, array2)

// 3rd Solution
function containsCommonItem3(arr1, arr2) {
    return arr1.some(item => {
        if (arr2.includes(item)) {
            console.log('3rd Match Found')
        }
    })
}
containsCommonItem3(array1, array2)

// BEST SOLUtion 
// Naive
function hasPairWithSum(arr, sum) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === sum)
                return true;
        }
    }

    return false;
}

// Better
function hasPairWithSum2(arr, sum) {
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (mySet.has(arr[i])) {
            return true;
        }
        mySet.add(sum - arr[i]);
    }
    return false;
}

console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9))



const strings = ['a', 'b', 'c', 'd'];
const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push
strings.push('e');

//pop
strings.pop();
strings.pop();

//unshift
strings.unshift('x')

//splice
strings.splice(2, 0, 'alien');

console.log(strings)