
// Worst solution actually - O(2^n) - exponential time complexity.
function fib(n) {
    if(n < 2) {
        return n;
    }

    return fib(n-1) + fib(n-2);
}

console.log(fib(42));       // Will take lot of time