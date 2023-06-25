const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10).fill('nemo');
function findNemo(array) {
    //let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo')
        }
    }
    //let t1 = performance.now()
    // console.log('Call to find Nemo took ' + (t1 - t0) + ' miliseconds')
}
findNemo(large) // O(n) --> Linear Time


const boxes = [0, 1, 2, 3, 4, 5]

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0])
    console.log(boxes[1])
}
logFirstTwoBoxes(boxes) // O(1) Constant Time

//  Big O Calculation
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for (let i = 0; i < input.length; i++) { // O(n)
        anotherFunction(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    }
    return a; // O(1)
}
// funChallenge()
// BIG O(3 + 4n)

// Challenge
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) { // O(n)
        let x = i + 1; // O(n)
        let y = i + 2; // O(n)
        let z = i + 3; // O(n)

    }
    for (let j = 0; j < input; j++) { // O(n)
        let p = j * 2; // O(n)
        let q = j * 2; // O(n)
    }
    let whoAmI = "I don't know"; // O(1)
}
// BIG O(4 + 5n)


// BIG O RULE
// 1. Worst Case
// 2. Remove Constants
// 3. Diifferent terms for inputs
// 4. Drop Non Dominants

// 1. Worst Case
const nemo1 = ['nemo'];
const everyone1 = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
function findNemo1(array) {
    for (let i = 0; i < array.length; i++) {
        console.log('Running')
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            break;
            // But if nemo will last in array this will be worst case
        }
    }
}

findNemo1(everyone1);

// 2. Remove Constants (Drop the Constant)
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); // O(1)

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    // Half 
    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }
    // 100 
    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}
// BIG O(1 + n/2 + 100) ignoring variable assignments and small calculations for this example
// O(n/2 + 101)
// O(n + 1)
// O(n)
function compressBoxesTwice(boxes) {
    boxes.forEach(function (boxes) {
        console.log(boxes)
    });
    boxes.froEach(function (boxes) {
        console.log(boxes);
    })
}
// O(a + b) that means O(2n)
// Drop the constants
// O(n)

// 3. Diifferent terms for inputs
function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function (boxes) {
        console.log(boxes)
    });
    boxes2.froEach(function (boxes2) {
        console.log(boxes);
    })
}
// BIG O(a + b)

// 
//Log all pairs of array
const boxesletter = ['a', 'b', 'c', 'd', 'e'];
function logAllPairesOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            //console.log(array[i], array[j])
            if (array[i] === array[j]) {
                console.log('Hello this is matched to ' + array[i], array[j])
            }
            // else {
            //     console.log('Not MAtched!')
            // }
        }
    }
}
logAllPairesOfArray(boxesletter)
// answer - a a b a c a d a e a

// WITH FOREACH 
function logAllPairesOfBoxes(boxes) {
    boxes.forEach(function (firstBox) {
        boxes.forEach(function (secondBox) {
            console.log(firstBox, secondBox);
            console.log('Second ForEAch')
        })

    })
}
logAllPairesOfBoxes(boxesletter)
// Nested Loop that means instead of having to for loops one after another where we use addition, when you
// see loops that are nested, we use multiplication.
// BIG O(n * n) that is O(n ^ 2)

// 4. Drop Non Dominants
const num = [1, 2, 3, 4, 5]
function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function (number) {
        console.log(number);
    });

    console.log('and these are their sums:');
    numbers.forEach(function (firstNumber) {
        numbers.forEach(function (secondNumber) {
            console.log(firstNumber + secondNumber);
        });
    });
}
printAllNumbersThenAllPairSums(num)
// BIG O(n + n^2)
// with drop non dominants this is O(n^2)
// Exp. O(x^2+3x+100+x/2)
// X = 5 O(5*2+15+100+250)
// 0(n^2)


// Space Complexity
const complex = [1, 2, 3, 4, 5]
function boo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('Boo!')
    }
}
boo(complex) //O(1)

function arrayOfHintTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray = 'Hello'
    }
    return hiArray;
}
arrayOfHintTimes(5)

//Find 1st and Find last tweet
const array = [
    { tweet: 'Hello', date: 2021 },
    { tweet: 'Go away', date: 2022 },
    { tweet: 'Let Have fun', date: 2023, },
    { tweet: 'Enjoy most fun', date: 2024, }]

function checkTweet(list) {
    const firstTweet = list[0].tweet;
    const lastTweet = list[list.length - 1].tweet;
    return { firstTweet, lastTweet };
}

const { firstTweet, lastTweet } = checkTweet(array);
console.log('First tweet:', firstTweet);
console.log('Last tweet:', lastTweet);
//BIG O(n^2)

//Find how many tweet
const array2 = [
    { tweet: 'Hello', date: 2021 },
    { tweet: 'Go away', date: 2022 },
    { tweet: 'Let Have fun', date: 2023 },
    { date: 2024 }
];

function countTweets(list) {
    let tweetCount = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].tweet) {
            tweetCount++;
        }
    }
    return tweetCount;
}
const tweetCount = countTweets(array2);
console.log('Number of tweets:', tweetCount);


// Type Of LOOP IN javascript
// 1.For Loop 
const everyoneList = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
function findNemo1(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo')
        }
    }
}
findNemo1(everyoneList);

// 2. forEach loop
const findNemo2 = array => {
    array.forEach(fish => {
        if (fish === 'nemo') {
            console.log('Found Nemo!')
        }
    })
}
findNemo2(everyoneList);

// 3.  loop diffrent
const findNemo3 = array => {
    for (let fish of array) {
        if (fish === 'nemo') {
            console.log('Found Nemo!')
        }
    }
}
findNemo3(everyoneList);