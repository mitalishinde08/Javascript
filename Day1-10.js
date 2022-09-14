//1. Function which returns a random number in the given range
function randomNumberGeneratorInRange(rangeStart, rangeEnd) {    

	return Math.random() * (rangeEnd
     - rangeStart) + rangeStart;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)


//2. Function to reverse a string
const str = "JavaScript is awesome"

function reverseAString(str) {
    // write your solution here
    str_arr = str.split('').reverse()

    return str_arr.join('')
}

console.log(`Reversed string is: ${reverseAString(str)}`)

// 3. Write a program to reverse a given integer number


function reverse_num(num) {
    let arr=[];
    while(num!=0) {
        arr.push(num%10);
        num = Math.floor(num/10);
    } 
    return parseInt(arr.join(''))
}

console.log(reverse_num(39))

// 4. Write a function which can convert the time input given in 12 hours format to 24 hours format

let time = '12:00PM'

function convertTo24HrsFormat(time) {
    if (time.endsWith('AM')) {
        time_arr = time.split(':');
        if (time_arr[0]==='12') {
            time_arr[0]='00'
            time_arr[1]=parseInt(time_arr[1]).toString()
        }
        else {
            time_arr[0]=parseInt(time_arr[0]).toString()
            time_arr[1]=parseInt(time_arr[1]).toString()
        }
    }
    else {
        time_arr = time.split(':');
        if (time_arr[0]==='12') {
            time_arr[0]='12'
            time_arr[1]=parseInt(time_arr[1]).toString()
        }
        else {
            time_arr[0]=(parseInt(time_arr[0]) + 12).toString()
            time_arr[1]=parseInt(time_arr[1]).toString()
        }
    }
    return time_arr.map((i)=>i.padStart(2, '0')).join(':')
}

convertTo24HrsFormat(time)

// 5. Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

const str = 'F(X) !== G(X) !== F(X)';

function getTheGapX(str) {

    if (str.indexOf('X')===str.lastIndexOf('X')) {
        return str.indexOf('X')
    }
    else {
        return str.lastIndexOf('X') - str.indexOf('X')
    }
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)

// 6.Write a function to truncate a string to a certain number of words

const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    
    arr = str.split(' ')

    return arr.slice(0,wordLimit).join(' ')

}
console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)

// 7. Create a regular expression to validate if the given input is valid Indian mobile number or not

const number = '+919876543210';

function validateMobile(number) {
    let reg = /^\+?(91)? ?[0-9]{10}$|^0? ?[0-9]{10}$/

     return reg.test(number)

}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)

// 8.Write a function which accepts two valid dates and returns the difference between them as number of days

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    
    let date1 = new Date(dateText1)
    let date2 = new Date(dateText2)
    return Math.abs(date1 - date2)/DAY_IN_MILLISECONDS
}

console.log(getDaysBetweenDates('10/15/2020', '12/1/2020'))

// 9. Write a function to check if an object is empty or not in javaScript?

const obj = { key: 1 };

function isEmpty(obj) {

    return Object.keys(obj).length === 0
}

console.log(`is empty object: ${isEmpty(obj)}`)

// 10. Write a function to remove array element based on object property?

const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    
    return array.filter((i)=>i.field!==filterField)
    
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)