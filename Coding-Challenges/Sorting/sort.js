function bubbleSort(arr) {
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length-i; j++) {
            if (arr[j] > arr[j+1]) {
                let lesser = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = lesser;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i=0; i< arr.length; i++) {
        let indexOfMin = i;

        for (let j=i+1; j<arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if (indexOfMin !== i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }

    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const centre = Math.floor(arr.length / 2);
    const left = arr.slice(0, centre);
    const right = arr.slice(centre);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let results = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        }
        else {
            results.push(right.shift());
        }
    }

    // One of either left or right array will not be empty so ES6 syntax to inset the last element
    // from either left or right.
    return [...results, ...left, ...right];
}

console.log(bubbleSort([3, 0, 97, -5, 21, 8, -11, 77, 14, 34, 1]));
console.log(selectionSort([3, 0, 97, -5, 21, 8, -11, 77, 14, 34, 1]));
console.log(mergeSort([3, 0, 97, -5, 21, 8, -11, 77, 14, 34, 1]));