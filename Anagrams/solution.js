function anagrams(stringA, stringB) {
    const aMap = buildCharMap(stringA);
    const bMap = buildCharMap(stringB);

    if(Object.keys(aMap).length !== Object.keys(bMap).length) {
        return false;
    }
    
    for (let char in aMap) {
        if (aMap[char] !== bMap[char]) {
            return false;
        }
    }

    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

console.log(anagrams("rail safety", "fairy tales"));
console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
console.log(anagrams("Hi There", "Bye there"));