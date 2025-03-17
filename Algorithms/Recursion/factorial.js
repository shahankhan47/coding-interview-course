// function has 2 returns
function factorialRecursive(num) {                  // O(n)
    // base case:
    if (num === 2) {
        return 2
    }
    // recursive case:
    // get lower and lower until we hit the base case.
    return num * factorialRecursive(num - 1)
}

function factorialIterative(num) {                  // O(n)
    let answer = 1;
    for (let i=2; i<=num; i++) {
        answer = answer*i;
    }
    console.log(answer)
}

// factorialIterative(5)
console.log(factorialRecursive(5))