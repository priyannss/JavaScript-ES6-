// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);
// since writable is false so cant write Math.PI = 5;

const chai = {
    name: "Ginger chai",
    price: 250,
    isAvailable: true
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// console.log(Object.getOwnPropertyDescriptor(chai, "price"));

// ++++++++++++ changing property +++++++++++

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
});

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
}  // name is not getting printed because its not enumerable
