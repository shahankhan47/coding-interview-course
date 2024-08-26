function matrix(n) {
    const results = [];

    for(let i=0; i<n; i++) {
        results.push([]);
    }

    let counter = 1;

    let startColumn = 0;
    let endColumn = n-1;
    let startRow = 0;
    let endRow = n-1;

    while (startColumn <= endColumn && startRow <= endRow) {
        // This is for top row:
        for (let i=startColumn; i<=endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        // Top row shifts down by 1
        startRow++

        // This is for rightmost column:
        for (let i=startRow; i<=endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }

        // Rightmost column shifts left by 1
        endColumn--;

        // This is for bottom row:
        for (let i=endColumn; i>=startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }

        //Bottom row shift up by 1
        endRow--;

        // This is for the leftmost column
        for(let i=endRow; i>=startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        
        //Leftmost column shifts right by 1
        startColumn++;
    }

    console.log(results);
}

matrix(6)