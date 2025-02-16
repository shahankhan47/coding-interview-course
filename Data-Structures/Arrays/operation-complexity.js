// Storage - 4 bytes * 4 items = 16 bytes in memory
let strings = ['a', 'b', 'c', 'd'];

// Access: O(1) - constant time. accessing directly using the index
strings[2]

// Push: O(1) - constant time. Adding at the last+1 index
/**
 * This can be O(n) also. Javascript usually stores array items in chunks of 8/16/32/... bytes.
 * So if the array is using the whole chunk and the chunk is full and if we add another element,
 * under the hood the computer actually deletes the array from it's original location and allocates
 * new memory of double the size (8 bytes to 16 bytes, etc) and copies the array in the new chunk
 * with the new element added.
 */
strings.push('e');

// Pop: O(1) - contant time. remove last item and last index.
strings.pop();

// Insertion: O(n) - linear time. Add item at a specific index and shift indexes.
strings.unshift('x');
strings.splice(2, 0, 'alien');

// Deletion: O(n) - linear time. Delete item at a specific index and shift indexes.
strings.shift()
strings.splice(1,1)

console.log(strings)