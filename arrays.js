/*(1)******************************************
 * Create an array named fruits with the following values: "apple", "banana", "orange", "grape".
 * Access the third element directly [2] ("orange") and change its value to "kiwi".
 */

const fruits = ['apple', 'banana', 'orange', 'grape'];
fruits[2] = 'kiwi';

/*(2)******************************************
 * Create an array named numbers with the following values: 2, 4, 6, 8, 10.
 * Add the number 12 to the end of the numbers array.
 * Remove the first element from the array.
 */

const numbers = [2, 4, 6, 8, 10];
numbers.push(12); //push adds element to the end of array
console.log(numbers);
numbers.shift(0); //shift removes first element
console.log(numbers);

/*(3)******************************************
 * Create two arrays, firstNames with values: "John", "Emma", "Michael", and lastNames with values: "Doe", "Smith", "Johnson".
 * 
 * Concatenate the firstNames and lastNames arrays to create a new array named fullNames.
 */

const firstNames = ["John", "Emma", "Michael"];
const lastNames = ["Doe", "Smith", "Johnson"];

const fullNames = [];

for (let i = 0; i < firstNames.length; i++) {
    fullNames.push(firstNames[i] + " " + lastNames[i])
}

console.log(fullNames);

/*(4)*********************************************
 * Create an array named ages with the following values: 25, 30, 18, 42, 15.

 * Use a loop to calculate and return the sum of all the ages.
 */
const ages = [25, 30, 18, 42, 15];
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
}
console.log(ageSum);

/*(5)**********************************************
 * Create an array named scores with the following values: 85, 92, 78, 95, 88.
 
 * Write a function that filters the scores array to only include scores that are greater than or equal to 90.
 */
const scores = [85, 92, 78, 95, 88];

const filterFun = (scores) => {
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < 90) {
            scores.splice(i, 1)
        }
    }
    return scores;
}
console.log(filterFun(scores));

/*(6)*
 * Create an array named countries with values: "USA", "Canada", "Mexico", "France", "Germany".
 * 
 * Write a function that checks if "Mexico" exists in the countries array. If it does, return its index; otherwise, return -1.
 */

const countries = ["USA", "Canada", "Mexico", "France", "Germany"]

const checksForMex = (array) => {
    let foundMex = -1;
    array.forEach((element, index) => {
        if (element == "Mexico") {
            foundMex = index;
        }
    });
    return foundMex;
}

console.log(checksForMex(countries));

/*(7)*
 * Create an array named numbers with the following values: 3, 7, 1, 9, 4.
 
 * Write a function that squares each element of the numbers array and returns a new array with the squared values.
 
 */
const numbers2 = [3, 7, 1, 9, 4]

const squareNums = (array) => {
    numSquared = [];
    array.forEach(num => {
        numSquared.push(num * num);
    })
    return numSquared;
}
console.log(squareNums(numbers2)); 

/*(8)*
 * Create an array named grades with the following values: 87, 95, 76, 88, 92.
 
 * Write a function that sorts the grades array in ascending order and returns the sorted array.
 
 */
const grades = [87, 95, 76, 88, 92];

sortGrades = (array) => {
    array.sort(function(a,b){return a-b})
    return array;
}

console.log(sortGrades(grades));

/*(9)*
 * Create an array named data with the following values: 10, 20, 30, 40, 50.
 
 * Write a function that doubles each element of the data array and returns a new array with the doubled values.
 
 */
const data = [10, 20, 30, 40, 50]

const doubleData = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
console.log(doubleData(data));

/*(10)*
 * Create an array named values with the following values: 34, 12, 78, 53, 90.

 * Write a function that finds and returns the maximum value in the values array.
 */
const values = [34, 12, 78, 53, 90]

const findMin = (arr) => {
    arr.sort(function(a,b){return a-b})
    return arr[0];
}
console.log(findMin(values));