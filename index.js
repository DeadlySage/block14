// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length; // returns the legth of the array
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let sum = 0; // sum of the array

  for (let i = 0; i < getLength(numbers); i++) {
    // traverse the array adding to sum
    sum = sum + numbers[i];
  }

  return sum; // return sum
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  let mean = 0; // mean of the array

  mean = getSum(numbers) / getLength(numbers); // sum of numbers / the number of integers in the array

  return mean; // return mean
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  let min = numbers[0]; // set initial value of min to the first object of the array

  for (let i = 1; i < getLength(numbers); i++) {
    // traverse the array

    if (min > numbers[i]) {
      // checks if min is larger than next object of the array
      min = numbers[i]; // if min is larger than the next object, replace min with that object
    }
  }

  return min; // return min
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  let max = numbers[0]; // set initial value of max to the first object of the array

  for (let i = 1; i < getLength(numbers); i++) {
    // traverse the array
    if (max < numbers[i]) {
      // checks if max is smaller than the next object of the array
      max = numbers[i]; // if max is smaller than the next object, replace max with that object
    }
  }

  return max; // return max
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  let range = 0; // range of the array

  range = getMax(numbers) - getMin(numbers); // subtract max of numbers with min of numbers

  return range; // return range
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  const evens = []; // create an array with no objects

  for (let i = 0; i < getLength(numbers); i++) {
    // traverse the array
    if (numbers[i] % 2 == 0) {
      // check if number is divisable by 2 with no remainder
      evens.push(numbers[i]); // if number has no remainder, add to evens
    }
  }

  return evens; // return evens
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  const odds = []; // create and array with no objects

  for (let i = 0; i < getLength(numbers); i++) {
    // traverse the array
    if (numbers[i] % 2 !== 0) {
      // check if number is divisable by 2 with a remainder
      odds.push(numbers[i]); // if number has a remainder, add to odds
    }
  }

  return odds; // returns odd
}
