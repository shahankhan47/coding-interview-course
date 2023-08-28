// rail safety === fairy tales      True
// RAIL! SAFETY! === fairy tales    True
// Hi There === Bye there           False

// Solution requires regex to be used:
const word = "Hi There!!!";
let newWord = word.replace(/[^\w]/g, "").toLowerCase();
console.log(newWord)