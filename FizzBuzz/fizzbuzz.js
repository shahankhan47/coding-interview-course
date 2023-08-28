function fizzbuzz(n) {
    for(let i=1; i<=n; i++) {
        // If the number is divisible by 3 and 5 both
        if(i%3==0 && i%5==0)
        console.log("FizzBuzz");
        // If the number is divisible by 3
        else if(i%3==0)
        console.log("Fizz");
        // If the number is divisible by 5
        else if(i%5==0)
        console.log("Buzz");
        // Rest of the numbers
        else
        console.log(i)
    }
}

fizzbuzz(100);