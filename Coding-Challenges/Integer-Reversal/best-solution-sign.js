function reverse(num) {
    let reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(num);
}

console.log(reverse(500));
console.log(reverse(-90));
console.log(reverse(819));
console.log(reverse(-15));
console.log(reverse(61));