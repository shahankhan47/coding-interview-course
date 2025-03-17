A function that refers to itself.
Really good for tasks that have repeated sub-tasks to do.

Cons:
- Difficult to understand.
- Stack overflow.

Rules:
- Identify the base case - condition when to stop the recursion.
- Identify the recursive case - condition when to call itself again.
- Get closer and closer and return when needed.
- Usually you have 2 returns inside a recursive function.

Recursion vs Iterative:
- Anything that can be done recursively, can be done iteratively.
- Pros of recursion:
    - Code is dry
    - More readable
- Cons of recursion:
    - Large stack
    - Space complexity

When to use recursion:
- Every time you are using a tree or converting something into a tree, consider recursion.
    - Divided into a number of sub-problems that are smaller instances of the same problem.
    - Each instance of the sub-problem is identical in nature.
    - The solution of each sub-problems can be combined to solve the main problem.
    - This is called divide and conquer.

