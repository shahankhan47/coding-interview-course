// O(n^2)
function steps(n) {
    // Good solution
    for (let i=1; i<=n; i++) {
        console.log(`Step ${i}:`);
        let stair = "";
        for (let j=1; j<=n; j++) {
            (j>i) ? stair += "*" : stair += "#";
        }
        console.log(stair);
    }
}

steps(5)