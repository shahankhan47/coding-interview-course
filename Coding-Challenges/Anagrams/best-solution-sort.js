function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

console.log(anagrams("rail safety", "fairy tales"));
console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
console.log(anagrams("Hi There", "Bye there"));