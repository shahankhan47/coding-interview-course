// Given 2 arrays, create a function that let's the user know (true/false) whether these 2 arrays contain any common item.
// arr1 = [a,b,c,x], arr2 = [z,y,i] --> false
// arr1 = [a,b,c,x], arr2 = [z,y,x] --> true


// Start Interview:

// Questions to ask about inputs and outputs:
    // 2 input parameters -> ans: always gonna be arrays -> can get really really big
    // return boolean -> ans: yes

// Value of the problem? Main goal?
    // How large the array is gonna get?
    // Is our goal to be efficient? (Time or Space complexity)

// Speak about naive brute force code. Whatever comes to your mind. (Don't write)
    // Nested loop to compare each i item with j and check if they are same.
    // Complexity O(n*m)
    // Let him know this approach is not the best and why.

// Talk about better solutions.
    // Converting 1st array into object and check if the object contains any keys equal to any item in second array.
    // Before coding, walkthrough the plan and write down the steps

function containsCommonItems(arr1, arr2) {
    // loop through 1st array and convert into object where {item: true}
    let map = {};                               // better varaible name should be used
    for (let i=0; i<arr1.length; i++) {
        if (!map[arr1[i]]) {
            map[arr1[i]] = "anything";
        }
    }

    // loop through 2nd array and check if any key exists with the item in 2nd array
    for (let i=0; i<arr2.length; i++) {
        if (map[arr2[i]] === "anything") {
            return true
        }
    }
    return false;
}

console.log(containsCommonItems(["a", "b", "z", "x"], ["c", "s", "r"]))

// Time Complexity - O(n+m)
// Space Complexity - O(n)

// Not finished yet.
// Now try to break your code.
// Try all kinds of data types for the elements in your array (str, int, arr, obj, double, boolean, null, undefined, etc)
// What if we don't receive a second array -> already asked that we will always have 2 arrays in params.
// Modularize code and break up solutions as much as possible. Comment your code too. Atleast talk about this.

// Correct naming conventions - Just let the interviewer know that you're thinking about this.
// Let the interviewer know about edge cases, null, 0, undefined, large arrays, etc.
// Tell the interviewer what you'd google to make the code more efficient. Or any other worse solution.
// Finally - make code more readable - atleast tell the interviewer you would do this.


// Worse but more readable solution:
function moreReadableSolution(array1, array2) {
    return array1.some(item => array2.includes(item))
}

console.log(moreReadableSolution(["a", "b", "z", "x"], ["c", "s", "z"]))