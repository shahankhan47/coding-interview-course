// O(2^n)
let count = 0;
function fib(n) {
    count++;
    if (n<2) {
        return n
    }
    return fib(n-1) + fib(n-2)
}

// O(n^2) converted to O(n) complexity with Dynamic Programming but space complexity is increased
function fibMaster() {
    let cache = {};

    return function fib(n) {
        if (n in cache) {
            return cache[n];
        }
        else {
            if (n<2) {
                return n
            }
            cache[n] = fib(n-1) + fib(n-2)
            return cache[n];
        }
    }
}

//Very Slow
const fasterFib = fibMaster();
console.log(new Date())
console.log(fib(41))            // Don't go above 41 - system will crash
console.log(new Date())

//Very fast
console.log(new Date())
console.log(fasterFib(75))
console.log(new Date())


// There's another way to solve this using Iterative-Dynamic-Programming approach:
function fibIterative(n) {
    if (n<2) {
        return n
    }
    else {
        let answer = [0,1];
        for (let i=2; i<=n; i++) {
            answer.push(answer[i-2] + answer[i-1])
        }
        return answer.pop()
    }
}

//Very fast
console.log(new Date())
console.log(fibIterative(75))
console.log(new Date())