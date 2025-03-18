/**
 *  You are given two positive integers n and k. A factor of an integer n is defined as an integer i where n % i == 0.
 *  Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n 
 *  has less than k factors.
 */

// My Solution:
function kthFactor1(n, k) {
    let factors = []
    for (let i=1; i<=n; i++) {
        if (n%i == 0) {
            factors.push(i)
        }
    }
    if (factors.length) {
        if (factors.length < k) {
            return -1
        }
        else {
            return factors[k-1]
        }
    }
}

// Best Solution
function kthFactor2(n, k) {
    let num_factors = 0;

    for (let i = 1; i <= n; i++) {
        if ( n % i == 0) {
            num_factors++;
            if( num_factors == k)
            {
                return i;
            }
        }
    }

    return -1;
}