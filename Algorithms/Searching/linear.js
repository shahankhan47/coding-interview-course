// Looping one by one through the list.
// Best case - O(1)
// Worst case - O(n)

let a = [2,3,4,5,6,7,8,9,23,11,12,13,14,15]

console.log(a.indexOf(23))                                  // Returns index

console.log(a.findIndex((item) => item === 23))             // Return index

console.log(a.find((item) => item === 23))                  // Returns element if exists or undefined

console.log(a.includes(23))                                 // Returns true/false if element exists