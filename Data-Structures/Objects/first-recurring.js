// Find the first recurring character in [2, 5, 1, 4, 2, 5, 6, 3, 5, 6]

// O(n^2)
function inefficientSolution(arr) {
    const startDate = new Date();
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] === arr[j]) {
                const endDate = new Date();
                return {
                    answer: arr[i],
                    start: startDate,
                    end: endDate
                };
            }
        }   
    }
    return undefined;
}

// O(n) - using hash table
// This increases space complexity though - because it creates another data structure to solve
function efficientSolution(arr) {
    const startDate = new Date();
    let map = {};
    for(let i=0; i<arr.length; i++) {
        if(map[arr[i]]) {
            const endDate = new Date();
            return {
                answer: arr[i],
                start: startDate,
                end: endDate
            };
        }
        map[arr[i]] = "anything";
    }
    return undefined
}

console.log(inefficientSolution([2, 5, 5, 2]));     // returns 2 - incorrect
console.log(efficientSolution([2, 5, 5, 2]));       // returns 5 - correct