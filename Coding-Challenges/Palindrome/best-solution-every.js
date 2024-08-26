function palidrome(str) {
    return [...str].every((char, i) => {
        return char === str[str.length-i-1];
    })
}

console.log(palidrome("malayalam"));
console.log(palidrome("Shahan"));