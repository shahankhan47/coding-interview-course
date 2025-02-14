// Good code - readable and scalable


// O(n) - Linear
function findNemo (array) {
    let t0 = performance.now();
    for (let i=0; i< array.length; i++) {
        if (array[i] === "nemo") {
            console.log("found nemo");
            break;
        }
    }
    let t1 = performance.now();
    console.log("The function took ", (t1-t0), " milliseconds")
}

// O(1) - Constant
function findFirst(items) {
    console.log(items[0])
}

// O(n+m)
function logAllBoxes(boxes1, boxes2) {
    boxes1.forEach(box => {
        console.log(box)
    });
    boxes2.forEach(box => {
        console.log(box)
    });
}

// O(n^2)
function nestedLoop(n) {
    for (let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            console.log(i,j)
        }
    }
}

// In JS the length pproperty is in-built for strings so it has O(1) complexity:
"jkjkjdsbvmsz,nglssg".length
// For other languages, this may not be true and it may iterate throught every character which would make it O(n)