//O(n)
function reverseBack(str) {
    let reversed = '';
    for (let i=str.length-1; i>=0; i--) {
        reversed += str[i];
    }
    return reversed
}

//O(n)
function reverseFront(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed
    }
    return reversed
}

console.log(reverseBack("Apple"))
console.log(reverseFront("Apple"))