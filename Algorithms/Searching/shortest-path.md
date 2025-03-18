BFS is great for shortest path problem but there's one thing it can't do:
    - It assumes that each jump to another node in a graph has same weight.
    - It does not care about the weight of the edges in the graph.

This is why these algorithms are better for shortest path problem:
    - Dijkstra's Algorithm
    - Bellman-Ford Algorithm

Bellman-Ford Algorithm: 
- Slightly better than Dijkstra's because it can accomodate negative weights.
- Not the most efficient. O(n^2)

Dijktra's Algorithm: 
https://medium.com/basecs/finding-the-shortest-path-with-a-little-help-from-dijkstra-613149fbdc8e
- Little bit more efficient