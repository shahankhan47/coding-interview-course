function chunk(arr, size) {
    // Create an empty array to hold chunk arrays
    const chunked = [];
    // For each element in the original array
    for (let elem of arr) {
        // Retrieve last element of chunk
        const last = chunked[chunked.length-1];
        // If last element does not exist or is equal to the size of the chunk
        if(!last || last.length === size) {
            // Create a chunk and push the element inside
            chunked.push([elem]);
        }
        // Else push element in the last chunk
        else {
            last.push(elem);
        }
    }
    return chunked;
}


console.log(chunk([1,2,3,4,5,6], 2));
console.log(chunk([1,2,3,4,5,6,7,8,9], 3));
console.log(chunk([1,2,3,4,5,6,7,8,9], 2));
console.log(chunk([1,2,3,4,5,6], 10));
console.log(chunk([1,2,3,4,5], 4));