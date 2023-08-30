const {Node, LinkedList} = require('./implement');

const pan = new Node("Pan");
const trunks = new Node("Trunks");
const list = new LinkedList();
list.head = pan;

list.insertFirst("Gohan");
list.insertFirst("Goku");
list.insertFirst("Bardock");
list.removeLast();
list.clear();
list.removeFirst();


list.head = trunks;
list.insertFirst("Vegeta");
list.insertFirst("King Vegeta");
list.insertFirst("Frieza");
list.removeFirst();
list.removeLast();
list.removeFirst();
list.removeLast();
list.removeFirst();
list.removeLast();


list.insertLast("Orange");
list.insertLast("Apple");
list.insertLast("Mango");
list.insertLast("Banana");
list.removeAt(1);
list.removeAt(-1);
list.removeAt(12);
list.removeAt(2);
list.removeAt(1);
list.removeAt(0);


list.insertAt(5, "Shahan");
console.log(list.getFirst());
list.insertAt(0, "Zohhak");
console.log(list.getFirst());
list.insertAt(-1, "Karan");
console.log(list.getFirst());
list.insertAt(2, "Osama");
console.log(list.getAt(2));
list.insertAt(80, "Inzamam");
console.log(list.getAt(2));


list.forEach((data, index) => {
    console.log(index, ": ", data);
})

for (let names of list) {
    console.log(names);
}