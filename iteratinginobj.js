const obj = {
    name : "obj1_property"
};

// for in loop to iterate in object's property
for(let key in obj){
    console.log("this obj's first property is :- " , obj.name);
}


console.log("\n");


// for of loop
for(let key of obj){
    console.log("this is obj's first property :- " + obj.name);
}