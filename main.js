console.clear();

// Answer 1
console.log("Answer 1 -----------------------------------");

// Write a program to search if a number exists in an array.
// If the number exists then return the position.
// If it exists multiple time then return an array with all the positions.
// If the number doesn't exist then return -1;

function searchNumberInArray(arr, number) {
  let positions = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      positions.push(i);
    }
  }

  if (positions.length === 0) {
    return -1;
  } else if (positions.length === 1) {
    return positions[0];
  } else {
    return positions;
  }
}

// Example usage:
const numbers = [5, 2, 7, 2, 8, 2, 3];
const numberToSearch = 2;

const result = searchNumberInArray(numbers, numberToSearch);
console.log(result); 

//===================================================================================

// Answer 2
console.log("Answer 2 -----------------------------------");

// Write a program to print following pattern in the console.

// 54321
// 5432
// 543
// 54
// 5

function printPattern(rows) {
  for (let i = 0; i < rows; i++) {
    let row = '';
    for (let j = rows; j > i; j--) {
      row += j;
    }
    console.log(row);
  }
}

// Example usage:
printPattern(5);

//===================================================================================

// Answer 3
console.log("Answer 3 -----------------------------------");

// Write a JavaScript program to sort an array in ascending order

function sortArrayAscending(arr) {
  return arr.sort((a, b) => a - b);
}

// Example usage:
const unsortedArray = [5, 2, 8, 1, 3];
const sortedArray = sortArrayAscending(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 5, 8]


//===================================================================================

// Answer 4
console.log("Answer 4 -----------------------------------");

// Write a JavaScript program to check if two strings are anagrams.
// Anagram string are such two strings which can be rearranged to create one another.

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// Example usage:
const string1 = "listen";
const string2 = "silent";

const result = areAnagrams(string1, string2);
console.log(result); // Output: true


//===================================================================================

// Answer 5
console.log("Answer 5 -----------------------------------");

// Write a JavaScript program to reverse a string without using inbuilt methods.

function reverseString(inputString) {
  let reversedString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }
  return reversedString;
}

// Example usage:
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"
