function steps(n) {
    // // My solution - doesn't work
    // for(let i=1; i<=n; i++) {
    //     console.log(`Step ${i}`);
    //     for(let j=1; j<=n; j++) {
    //         if(j>i) {
    //             console.log(" ");
    //         } else {
    //             console.log("#");
    //         }
    //     }
    // }

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