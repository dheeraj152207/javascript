/*
Types of data types in js
1> Primitive - call by value(ie a copy of data is made and passed)

string number boolean null undefined symbol, etc

2> Non- Primitive (Reference) - call by reference

arrays objects, etc


***
Dynamically Typed: This means you don't need to declare the type of a variable explicitly when you
 create it. The type of the variable is determined automatically at runtime based on the value 
 assigned to it.





 Types of memories in javascript
1> Stack Memory - it is used for all primitive datatypes 
2> Heap Memory - it is used for all non-primitive datatypes

*/




// Primitive types (stored in stack memory)
let a = 10;  // Number stored in stack
let b = "Hello";  // String stored in stack

// Copying primitive value (stored independently in stack)
let c = a; // 'c' gets a copy of 'a'
c = 20;    // Changing 'c' does not affect 'a'

console.log(a); // Output: 10
console.log(c); // Output: 20

// Reference types (stored in heap memory)
let obj = { key: "value" }; // Object stored in heap
let arr = [1, 2, 3]; // Array stored in heap


// Copying reference type (points to the same memory in heap)
let newObj = obj;
newObj.key = "newValue"; // Modifying 'newObj' affects 'obj'

console.log(obj.key); // Output: "newValue"
console.log(newObj.key); // Output: "newValue"