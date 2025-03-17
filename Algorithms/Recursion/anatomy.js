let counter = 0;
function inception() {
    if (counter > 3) {
        return "done"
    }
    counter++;
    // This return is very important in recursion.
    // If we do not return it, the actual value in line 12 will be undefined because the above return "done" only returns
    // at the last level of recursion, not any level above that.
    // So we need to tell the recursive function to keep returning what we got from the level below it.
    return inception()
}

console.log(inception())