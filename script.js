const now = 2023;
const ageJonas = now - 1991;
const ageMy = now - 1985;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5)

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)


// String 
const fistname = 'Dadabhau';
const job = "Developer"
const birthDate = 1985;
const year = 2023;

const dadabhau = "I'm " + fistname + ", a " + (year - birthDate) + " year old " + job + "!";
console.log(dadabhau);

const dadaNew = `I'm ${fistname}, a ${year - birthDate} year old ${job}!`
console.log(dadaNew);

console.log('String with \n\ multiple \n\ lines');

console.log(`string 
multiple
line`)


// If statement (controle struchure)
const age = 15;
if (age >= 18) {
    console.log("Sarah can start driving license")
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearLeft} year :)`)
}

const birthYear = 1998;
let century
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)

// Type Conversion 
const inputYear = '1991';
console.log(Number(inputYear) + 18)
console.log(inputYear + 18)

console.log(Number('Dadabhau'));
console.log(typeof NaN)
console.log(String(23), 23)

// Type Coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3)
console.log('23' + '10' + 3)
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n)

// 5 falsy Vaule: 0, '', undefined, null, NaN
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Dadabhau'))
console.log(Boolean({}))