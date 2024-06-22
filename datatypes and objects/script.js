console.log("Happy to see you!");

const a = 5;
let b = 6;
let c = "Happy";

console.log(a+b);

console.log(typeof a, typeof b, typeof c);

// primitive datatypes - 7
// Null, Number, String, Symbol, undefined, Boolean, BigInt

let x = "Happy hu mai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// Objects

let obj = {
    name: "Priyanshu",
    // "name": "Priyanshu" also allowed
    "job role": "SDE"
    // job role: "SDE" not allowed
};

console.log(obj);

// adding something into object
obj.salary = "$ 45k";

console.log(obj);

obj.isGoodLooking = true;

console.log(obj);