// #1 - Sort 10 schools around your house by distance: 
Insertion Sort - small data, simple to code

// #2 - eBay sorts listings by the current Bid amount: 
Radix or Counting Sort - a bid is usally between 1 - 1000 dollars. Fixed length on integers. Better than O(n*logn) 

// #3 - Sport scores on ESPN:
Quick Sort - decimal places, multiple formats, most efficient. Better space and time complexity on average.

// #4 - Massive database (can't fit all into memory) needs to sort through past year's user data: 
Merge Sort - using external memory / good worst case O(n logn) because data is massive.

// #5 - Almost sorted Udemy review data needs to update and add 2 new reviews: 
Insertion Sort - this is good for sorting pre-ordered lists.

// #6 - Temperature Records for the past 50 years in Canada: 
Radix or Counting Sort - if temp has no decimal places (only integers)
Quick Sort - if temp has decimal places. 

// #7 - Large user name database needs to be sorted. Data is very random: 
Merge Sort - good for worst case scenario if we have enough memory.
Quick Sort - good for average case scenarios.

// #8 - You want to teach sorting for the first time: 
Bubble Sort, Selection Sort - good for teaching.

What type of sorting algorithm does your programming language use?
- Different languages use different algorithms.
- For JS it depends on the engine running in the browser.
    - Chrome uses insertion and merge sort combined.
    - Mozilla uses quick sort.