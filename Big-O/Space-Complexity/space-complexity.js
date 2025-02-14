
// O(n)
function arrayOfHiNTimes (n) {
    let hiArray = [];
    for (let i=0; i< n; i++) {
        hiArray[i] = "hi"
    }
    return hiArray
}

console.log(arrayOfHiNTimes(6))