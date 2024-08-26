function chunk(arr, size) {
    const chunked = [];
    let index = 0;
    while (index < arr.length) {
        chunked.push(arr.slice(index, index+size));
        index += size;
    }
    return chunked;
}

console.log(chunk([1,2,3,4,5,6], 2));
console.log(chunk([1,2,3,4,5,6,7,8,9], 3));
console.log(chunk([1,2,3,4,5,6,7,8,9], 2));
console.log(chunk([1,2,3,4,5,6], 10));
console.log(chunk([1,2,3,4,5], 4));