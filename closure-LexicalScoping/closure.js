// lexical scoping --> inner function will have access of all the variables.

// function outer() {
//     let name = "priyanshu";

//     function inner() {
//         console.log("inner : ", name);
//     }

//     inner();
// }
// outer();


// closure
function makeFunc() {
    const name = "priyanshu";

    function displayName() {
        console.log(name);
    }

    return displayName;
}

const myFunc = makeFunc();  // here it will call makeFunc() function then inside the function after name declaration it will return the reference of displayName() method which is then hold by myFunc
myFunc(); // now here we are calling myFunc() also displayName()