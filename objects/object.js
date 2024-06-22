// Singleton
// Object.create();

// symbol
let mySym = Symbol("Full Name");
let mySym2 = Symbol("Full Name");

// Object literals
const JsUser = {
    name: "Priyanshu",
    "full name": "Priyanshu Kumar",
    mySym: "Atharva Kumar",
    [mySym2]: "Raghav Kumar",               // now it refers to the original symbol, correct way to use symbol
    age: 20,
    location: "Guwahati",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Friday"]
}

// console.log(JsUser, typeof JsUser);
// console.log(JsUser.location, typeof(JsUser.location));
// console.log(JsUser["location"]);

// console.log(JsUser.full name); // not accessable, syntax error, not allowed
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym, typeof(mySym), typeof(JsUser.mySym));
// console.log(JsUser[mySym2], typeof(JsUser[mySym2]));


// overriding the value
// JsUser.name = "Aarushi";
// console.log(JsUser.name, JsUser["name"]);

// +++++++++++++++++++++++++ freezing the object ++++++++++++++++++++++++++++++
// Object.freeze(JsUser); // now nobody can change the any value of a key
// JsUser.name = "Happy";   // this value will not be set
// console.log(JsUser.name);




JsUser.greeting = function () {
    // console.log("Hello, Js user");
    // return "Hello, Js user";
    return `Hello, Js user ${this.name}`;
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());



