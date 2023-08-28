function reversePure(str) {
    strArray = [...str];
    return strArray.reverse().join('');
}

function reverseImpure(str) {
    return [...str].reverse().join('');
}

console.log(reversePure("Hello. How are you?"));
console.log(reverseImpure("Hello. How are you?"));