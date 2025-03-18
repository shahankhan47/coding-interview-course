// Let's say we have a function that does some operation. Here e.g. adding 80 to a number.
function addTo80(n) {
    console.log("Let's say this takes very long time.")
    return n+80;
}

// And we call this function multiple times:
addTo80(5)
addTo80(5)
addTo80(5)
addTo80(5)
addTo80(5)
addTo80(5)

// What if in above case, the operation was very complex inside the function that takes time.
// What if the function was called huge amount of time and not just 5-6 times.

// In this case we can use memoization to cache
let cache = {}

function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n]
    }
    else {
        cache[n] = n + 80;
        return cache[n]
    }
}

// Now call many times it will be really fast.
memoizedAddTo80(5)
memoizedAddTo80(5)
memoizedAddTo80(5)
memoizedAddTo80(5)

// There is another problem with memoization is that the cache variable is declared outside the function as a global variable.
// This means it will take lot of memory space and can also be unreadable if it is declared far away from the function itself.
// To avoid this we can use closures in javascript.

// Using closures:

function memoizedAddTo80WithClosure() {
    let cache = {}
    return function(n) { 
        if (n in cache) {
            return cache[n]
        }
        else {
            cache[n] = n + 80;
            return cache[n]
        }
    }
}

const memoized = memoizedAddTo80WithClosure();
memoized(5)
memoized(5)
memoized(5)
memoized(5)
memoized(5)
memoized(5)
