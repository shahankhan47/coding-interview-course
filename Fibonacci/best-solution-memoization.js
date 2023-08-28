// Store the arguement of each function call along with the result.
// If the function is called again with the same arguements, return the precomputed result.


function fib(n) {
    if(n < 2) {
        return n;
    }

    return fib(n-1) + fib(n-2);
}

// Worst solution turned best by memoization
function memoizer(fn) {
    const cache = {};
    return function(...args) {
        if(cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

fib = memoizer(fib);
console.log(fib(100));