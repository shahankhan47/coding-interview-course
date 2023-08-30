// Given a list, return true if it's circular.
// Same solution as midpoint.
// If slow and fast points to same object, return true.


function isCircular(list) {
    let slow = list.head;
    let fast = list.head;

    while (fast?.next && fast?.next?.next) {
        slow = slow.next;
        fast = fast?.next?.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}