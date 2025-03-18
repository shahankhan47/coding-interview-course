// How this works:
// Comparing 2 values one by one and sorting them.
// Loops will be: n -> n-1 -> n-2 -> ... -> n-(n-1)
// Time O(n^2) Space: O(1)

function bubbleSort(array) {
    const newArray = JSON.parse(JSON.stringify(array));
    const length = newArray.length;
    for (let i=0; i< length; i++) {
        for (let j=0; j<length; j++) {
            if (newArray[j] > newArray[j+1]) {
                let temp = newArray[j];
                newArray[j] = newArray[j+1];
                newArray[j+1] = temp;
            }
        }
    }
    return newArray
}

let numbers = [0, 34, 5, 27, 11, 8, 90]
let num = bubbleSort(numbers)
console.log(num)
console.log(numbers)