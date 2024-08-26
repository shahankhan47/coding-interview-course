function vowels(str) {
    // g - don't stop at first match
    // i - case insensitive
    const matches = str.match(/[aeiou]/gi);
    console.log(matches ? matches.length : 0);
}

vowels("Hi There");
vowels("Hello how are you");
vowels("Why?");