// How it works:
// Divide and Conquer - keep dividing the list until we have 1 item in each list
// Compare each item with it's pair and place them before or after each other.
// Combine the lists by folowing above process untill the list is one sorted list again.
// Most stable algorithm - two or more items with same keys (value) appear in the sorted list as they are in the input list.
// Time: O(n*logn) Space: O(n)

function mergeSort(array) {
    const newArray = JSON.parse(JSON.stringify(array));
    if (newArray.length === 1) {
        return newArray;
    }

    const length = newArray.length;
    const middle = Math.floor(length / 2);
    const left = newArray.slice(0, middle);
    const right = newArray.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex])
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

let numbers = [0, 34, 5, 27, 11, 8, 90]
let num = mergeSort(numbers)
console.log(num)
console.log(numbers)