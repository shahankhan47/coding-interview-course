// How it works:
// Start with the first element and compare with the next. Put it before or keep it after the first element and make it a list.
// Keep comparing the whole list with the next elements and add them before or after the list (according to < or >).
// If any element should come in between the list then place it there.
// Fastest sort algorithm for n^2 complexity. Human like sorting. For small data.
// Best case O(n) - when list is partially sorted already.
// Time: O(n^2) Space: O(1)

function insertionSort(array) {
    const newArray = JSON.parse(JSON.stringify(array));
    for (let i=0; i<newArray.length; i++) {
        if (newArray[i] < newArray[0]) {
            // move number to first position
            newArray.unshift(newArray.splice(i, 1)[0])
        }
        else {
            // find where number should go:
            for (let j=1; j<i; j++) {
                if (newArray[i] > newArray[j-1] && newArray[i] < newArray[j]) {
                    // move number to the right spot
                    newArray.splice(j,0,newArray.splice(i,1)[0]);
                }
            }
        }
    }
    return newArray;
}

let numbers = [0, 34, 5, 27, 11, 8, 90]
let num = insertionSort(numbers)
console.log(num)
console.log(numbers)