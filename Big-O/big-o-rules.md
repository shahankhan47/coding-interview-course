Rule 1: Worst Case. Big-O only considers worst case.
Rule 2: Remove constants. If function runs loop e.g. 100 times, ignore it. Only care about the input.
        So O(4n/3 + 100) becomes O(n)
Rule 3: Different terms for inputs. (Trickiest in interviews).
        For 2 inputs it is not O(2n) or O(n) but it should be O(n+m)
Rule 4: Drop Non-Dominants. O(n + n^2) becomes O(n^2)