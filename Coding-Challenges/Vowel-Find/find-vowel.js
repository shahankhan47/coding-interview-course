// Hi There ---> 3
// Hello how are you ---> 7
// Why? ---> 0

function vowels(str) {
    let count = 0;
    for (char of str.toLowerCase()) {
        if(['a', 'e', 'i', 'o', 'u'].includes(char))
        count++;
    }
    console.log(count);
}

vowels("Hi There");
vowels("Hello how are you");
vowels("Why?");