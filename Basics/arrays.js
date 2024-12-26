const arr = [2,3,4,4,"dheeraj","name"]
console.log(arr.length)

/*
Shallow Copy

Mechanism: Creates a new array object, but the elements within the new array still 
reference the same memory locations as the elements in the original array.

Deep Copy

Mechanism: Creates a completely independent copy of the array, including all nested 
objects and arrays. Changes to the original array will not affect the deep copy.

*/

const myarr = new Array(1,2,3,"dheerajj")
console.log(myarr[1])

myarr.push(2) // adds the provided element at last place
console.log(myarr)

console.log(myarr.pop()) //returns and the last element of the array
console.log(myarr)

myarr.unshift(3)  // adds the elemets at the first place in the array
console.log(myarr)

console.log(myarr.shift())  // removes and returns the first element from the array

console.log(myarr.includes(9)) // returns true if 9 is present in the array
console.log(myarr.indexOf(9))  // returns -1 if 9 is not in the array


const newarr = myarr.join() //  makes a string of all elements in the array
console.log(typeof(newarr))

/*
slice()

        Extracts a portion of an array without modifying the original:

        const fruits = ["apple", "banana", "orange", "grape"];
        const citrus = fruits.slice(1, 3); // Extracts elements from index 1 to 2 (exclusive)

        console.log(citrus); // Output: ["banana", "orange"]
        console.log(fruits); // Output: ["apple", "banana", "orange", "grape"] (original array remains unchanged)


splice()

            Modifies the original array by adding, removing, or replacing elements

            const fruits = ["apple", "banana", "orange", "grape"];
            fruits.splice(2, 1); // Removes 1 element starting from index 2
            console.log(fruits); // Output: ["apple", "banana", "grape"]

- Use push() when you want to modify the existing array by adding elements to the end.

        const arr1 = [1, 2, 3];
        const arr2 = [4, 5];

        arr1.push(arr2); // Adds all elements of arr2 to the end of arr1

        console.log(arr1); // Output: [1, 2, 3, [4, 5]] 
        console.log(arr2); // Output: [4, 5] (arr2 remains unchanged)




- Use concat() when you need to create a new array that combines the elements of multiple arrays without altering the original arrays.
I hope this clarifies the differences between push()

            const arr1 = [1, 2, 3];
            const arr2 = [4, 5];

            const combinedArray = arr1.concat(arr2); 

            console.log(combinedArray); // Output: [1, 2, 3, 4, 5]
            console.log(arr1); // Output: [1, 2, 3] (arr1 remains unchanged)
            console.log(arr2); // Output: [4, 5] (arr2 remains unchanged)

- console.lg(...arr1) spreads the individual elements of the arr1

- Flattening an array with varying levels of nesting:

        const arr3 = [1, 2, [3, 4], 5, [6, [7, 8]]];
        const flattenedArr3 = arr3.flat(Infinity); 
        console.log(flattenedArr3); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


*/