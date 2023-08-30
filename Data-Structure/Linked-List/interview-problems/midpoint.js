/**
 * Return middle node of a linked list.
 * If list has even number of nodes, return last node of first half.
 * Do not use counter variables.
 * Do not retrieve the size of the list.
 * Iterate list only one time.
 */

//Solution:
/**
 * Two variable slow and fast.
 * Loop through the list once.
 * slow increments by 1
 * fast increments by 2.
 * with every increment, we check if the node which fast is pointing
 *      has next node and the next node also has a next node.
 * If the above is false, then the node which slow is pointing is the midpoint.
 */
function midpoint(list) {
    let slow = list.head;
    let fast = list.head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}