// /*How to Define a JavaScript Object
// Using an Object Literal
// Using the new Keyword
// Using an Object Constructor*/

// // =======================================================================================
// // ----------------------using object literal------------------------
// const object1 = {
//     talkingbehavior : "hello",

//     greet : function(){
//         console.log(this.talkingbehavior);
//     }
// }

// console.log(object1.greet());

// //accesing the object property
// object1.talkingbehavior = "hello everyone";

// //printing the object
// console.log(object1);

// ========================

class fruite {
   

    constructor(){
        this.season = "winter",
        this.health = 80
    }
};

const f1 = new fruite();

console.log(f1.season);