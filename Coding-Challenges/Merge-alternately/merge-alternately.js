function merge(word1, word2) {
    let shortString = word1 > word2 ? word2 : word1;
    let longString = word1 > word2 ? word1 : word2;

    let shortLength = shortString.length;

    let finalString = [];

    for (let i=0; i<shortLength; i++) {
        finalString.push(word1[i])
        finalString.push(word2[i])
    }

    finalString.push(longString.substring(shortLength))
    console.log(finalString.join(''))
    return finalString.join('')
}

merge("abc", "pqrs")