// When using sort() method, javascript actually converts ints to string (HTML equivalent number).
// So sorting below will give incorrect result:
let a = [1, 2, 65, 7, 11, 45, 367]
console.log(a.sort())

// See the HTML equivalent number of the string of the number
console.log(String(2).charCodeAt(0))

//Solution
console.log(a.sort((a,b) => a-b));