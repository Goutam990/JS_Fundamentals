// The this keyword refers to the current instance of the class Person, not the class itself.

class Person {
  constructor() {
    this.name = "Alice";
  }

  greet() {
    console.log("Hello, " + this.name);
  }
}

const rohan = new Person();
console.log(rohan);
rohan.greet();

const person1 = new Person();  // ✅ Works fine
person1.greet();               // Output: Hello, Alice


// ==========================================
// we can also build an object without a class
// const bike = {
//   name: "livo",
//   model: "1234"
// };

  // name and model are the properties of an obj 

  // We can access the propery using 

  // bike.name = "Honda shine 125";
  // console.log(bike.name);


  // if --> i want to add any property in an object --> obj.nameofproperty = "value";
  // bike.type = "BS6";
  // console.log(bike);  // type property added in the object.
  // Inheritance in js -- prototype based inheritance is done --> obj inherit properties form another obje--> which is somewhat our prototype.
