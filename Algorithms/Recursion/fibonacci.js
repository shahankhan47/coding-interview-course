function fiboIterative(n) {                 // O(n)
    let arr = [0,1];

    for (let i=2; i<=n; i++) {
        arr.push(arr[i-2] + arr[i-1])
    }

    return arr[n]
}

function fiboRecursive(n) {                 // O(2^n) - Exponential time. (very bad)
    if (n < 2) {
        return n;
    }

    return (fiboRecursive(n-1) + fiboRecursive(n-2))
}

console.log(fiboIterative(8))
console.log(fiboRecursive(8))