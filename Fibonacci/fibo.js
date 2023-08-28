// n=10 ---> 0,1,1,2,3,5,8,13,21,34,55

// My solution
function fib(n) {
    let series = [0,1];
    for (let i=2; i<=n; i++) {
        series.push(series[i-1] + series[i-2])
    }
    // console.log(series);
    console.log(series[n]);
}

fib(100);