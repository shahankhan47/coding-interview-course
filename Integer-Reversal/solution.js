function reverse(num) {
    let reversed = num.toString().split('').reverse().join('');
    if (num < 0) {
        return parseInt(reversed) * -1;
    }
    return parseInt(reversed);
}

console.log(reverse(500));
console.log(reverse(-90));
console.log(reverse(819));
console.log(reverse(-15));
console.log(reverse(61));