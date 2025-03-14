Also called
- Hash Tables
- Hash Maps
- Maps
- Dictionary

## Hash Function
A hash function takes in an input and outputs a string of fixed length.
There are various types of hash functions like md5, SHA-1, SHA-256
- Hash Functions are one way. If we give someone the hash, they cannot decode it.
- Hash Functions are consistent/idempotent i.e. for same input it will generate same output everytime.

## Problem with Hash Function:
When running on a CPU with limited memory, hash collisions happen. This is when the hash function runs out of memory
and stores key/value pairs in the same memory location where another key/value pairs already exist.
This creates another data structure called linked list.


## Objects vs Maps vs Sets
Objects only allow strings as keys
Objects are unordered
Maps allow any data type as keys
Maps are ordered
Sets only stores keys

## When to use Hash Tables
Fast lookups - as long as good collision resolution is present
Fast inserts
Flexible keys

## Disadvantage
Unordered
Slow key iteration