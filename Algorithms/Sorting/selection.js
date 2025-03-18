// How it works:
// Scans the smalles item in the list and places it in the first index.
// Continue the same in each loop
// Time: O(n^2) Space: O(1)

function selectionSort(array) {
    const newArray = JSON.parse(JSON.stringify(array));
    for (let i=0; i<newArray.length; i++) {
        // set current index as minimum
        let min = i;
        let temp = newArray[i];

        for (let j=i+1; j<newArray.length; j++) {
            if (newArray[j] < newArray[min]) {
                // update minimum if current is lower than what we had previously
                min = j;
            }
        }
        newArray[i] = newArray[min];
        newArray[min] = temp;
    }
    return newArray
}

let numbers = [0, 34, 5, 27, 11, 8, 90]
let num = selectionSort(numbers)
console.log(num)
console.log(numbers)