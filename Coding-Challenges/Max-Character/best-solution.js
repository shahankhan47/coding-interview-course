function maxChar(str) {
    const map = {};
    let max = 0;
    let maxChar = '';
    
    for (let char of str) {
        map[char] = map[char] + 1 || 1;
    }
    
    for (let char in map) {
        if (map[char] > max) {
            max = map[char];
            maxChar = char;
        }
    }

    return maxChar
}

console.log(maxChar("Hello There"));
console.log(maxChar("Shahan"));