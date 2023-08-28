function palindrome(str) {
    return str === [...str].reverse().join('');
}

console.log(palindrome("malayalam"))
console.log(palindrome("detartrated"))
console.log(palindrome("Shahan"))