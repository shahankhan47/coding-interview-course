const str = "some string";
let strArr = str.split('');
let newStr = str.split('');

let reversedString = "";
let reversedStr = "";
let reversedArr = [] 
for(i=strArr.length-1; i>=0; i--) {
    reversedString = reversedString + strArr[i]
    reversedStr = reversedStr + str[i]
    reversedArr.push(strArr[i])
}

// 4 alternate ways to reverse a string
console.log(reversedString);                        // Pushing in a new string after converting string to Array
console.log(reversedStr);                           // Pushing in a new string without converting string to Array
console.log(reversedArr.join(''));                  // Pushing in a new array and joining it
console.log(str.split('').reverse().join(''));      // Using built-in array method
console.log([...str].reverse().join(''))            // ES6 spread operator