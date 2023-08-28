function reverse(str) {
    return [...str].reduce((prev, char) => char + prev, '');
}

console.log(reverse("Typewriter"));