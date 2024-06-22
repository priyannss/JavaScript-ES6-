let age = 23;

if(age < 18) {
    console.log("You can't drive");
} else if(age >= 18 && age <= 50) {
    console.log("You can drive");
} else {
    console.log("You are too old to drive");
}


// operators
// +, -, /, *, **, %, ++, --

// assignment operators
// =, += , -=, /=, *=, **=, %=

// comparison operators
// ==, !=, === equal value and type, !== not equal value or not equal type, >, <,  >=, <=, ? ternary operator

console.log("3" == 3); // will compare only value not its type
console.log("3" === 3); // will compare its value and its type as well

console.log("3" != 3);
console.log("3" !== 3);

// logical operator
// &&, ||, !