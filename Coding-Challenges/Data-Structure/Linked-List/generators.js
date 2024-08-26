// Generators turn objects into iterables to which we can use for loops.

function* number() {
    const result = 1 + 1;
    return 20 + (yield result);
}

const generator = number();

// generator = {} empty object;
console.log(generator);

// now see the magic:
// First call to the generator.next() returns the value that was yield i.e. 2 above
console.log(generator.next());

// Next time generator.next() function should be called using an arguement.
// It will return the computed value in the return statement i.e. 20 + arg.
console.log(generator.next(10));

console.log("=================================================================================")

// Example 2
function* list() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const gen = list();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


console.log("=================================================================================");

// Example 3 - practical usage;
const iterator = list();
for (let value of iterator) {
    console.log(value);
}


console.log("=================================================================================");
// Mind blowing example
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
    yield* moreNumbers();
    yield 7;
}

function* moreNumbers() {
    yield 4;
    yield 5;
    yield 6;
}

const mindBlown = numbers();
let values = [];
for (let value of mindBlown) {
    values.push(value);
}

console.log(values);