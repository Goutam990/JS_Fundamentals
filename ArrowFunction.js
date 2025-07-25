// Regular Function
function addtwo( num1,  num2){
    return num1 + num2;
}

console.log(addtwo(3,4));


// Arrow Function
const addtwobyarrow = (num1,num2) => (num1 + num2);
console.log(addtwo(4,5));

console.log(globalThis); // nodejs---> (this) points to the global obj

console.log(this);       // {} - empty object return --> node.js --> this refers to the global object
 
// this keyword always represents the object that defined the arrow function.

