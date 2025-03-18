We are going to discuss:
Algorithm             Time         Space            Usage
- Bubble Sort       - O(n^2)        O(1)        - mostly used for educational purposes / not efficient.
- Merge Sort        - O(n*logn)     O(n)        - good D&C / best time complexity / not good space complexity / good in worst case.
- Selection Sort    - O(n^2)        O(1)        - mostly used for educational purposes / not efficient.
- Insertion Sort    - O(n^2)        O(1)        - when input is small / items are mostly sorted / really fast / easy to implement.
- Quick Sort        - O(n^2)        O(log n)    - best in average case scenarios / bad at worst case.

Mathematically it's impossible for a sorting algorithm to be better than O(n*logn)
But we can improve it by using non-comparison sorts like:
- Counting Sort - https://brilliant.org/wiki/counting-sort/
- Radix Sort - https://brilliant.org/wiki/radix-sort/