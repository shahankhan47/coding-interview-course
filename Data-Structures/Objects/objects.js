const obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    func1: function() {
        console.log("Function accessed");
    }
}

// INSERTION - O(1) - directly added to a key
obj.key4 = "value4";

// LOOKUP - O(1) - looked directly with a key
console.log(obj.key2);

// DELETION - O(1) - directly deleted a key/value pair
delete obj.key3;

// SEARCH - O(1) - directly accessing properties and methods inside the object
obj.func1();

console.log(obj);