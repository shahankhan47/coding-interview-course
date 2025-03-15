let obj1 = {a: true}
let obj2 = obj1;

obj1.a = "changed"

//obj2 will also be changed because obj2 is pointing to a reference of obj1 and not the actual value.
console.log(obj2);      // this will print {a: "changed"}

//Now if we delete obj1, obj2 will still be referencing to that {a: "changed"} value in memory location.
delete obj1

console.log(obj2)   // this will also print {a: "changed"} even though obj1 is deleted