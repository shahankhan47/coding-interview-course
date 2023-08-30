/**
 * Given a list and integer n, return node n spaces from last node.
 * Cannot use size method.
 * Assume n will always be less than the size.
 */

/**
 * Same solution as midpoint except
 * fast will increment by n only once.
 * then loop through the list incrementing slow and fast by 1.
 * check if fast node.next is null.
 * if it is, return slow
 */

function fromLast(n, list) {
    let slow = list.head;
    let fast = list.head;

    while (n > 0) {
        fast = fast.next;
        n--;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}