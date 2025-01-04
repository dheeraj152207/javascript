/*
ways to create object in js
1> const obj = {}  also known as object literals

in obj we put data as key value pairs where keys are treated as strings while value can 
be anything, it can be even function 

eg:-
    let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
    };
    console.log(person.name); // Output: John
    person.greet();           // Output: Hello, John


How to put symbol in object :------

        const mySymbol = Symbol("uniqueKey");
        const obj = {
            [mySymbol]: "This is a symbol property"
        };
        console.log(obj[mySymbol]); // Output: This is a symbol property


2> object.create()    by constructor method
*/

//objects using singleton or constructor

const tinderUser = new Object()
tinderUser.name = "dheeraj"
tinderUser.age = 20

// nested object

tinderUser.userName = {
    fullName : {
        firstName : "dheeraj" ,
        lastName : "pandey"
    }
}

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(tinderUser.userName.fullName.lastName)
console.log(tinderUser.hasOwnProperty('name')) // returns whether this key exist in keyset of object or not


//merging two or more objects using Object.assign() method

// Object.assign() method copies all the enumerable properties from one or more sources to a target object
// in this method first argument ie {} acts as target and remaining acts as source

const obj1 = {1:"a",2:"b"}
const obj2 = {2:"b",3:"c"}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)


//another way to merge objects

const obj4 = {...obj1,...obj2}
console.log(obj4)

// array of objects

const arr = [
    {
        id:122
    },
    {
        id:3455
    }

]

console.log(arr)
console.log(arr[1].id)