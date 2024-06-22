// both are the object declaration
// const obj = new Object();  // singleton object
const user = {}; // non singleton object

user.id = "123abc";
user.name = "Raghav";
user.isLoggedIn = false;

for (const key in user) {
  // console.log(key, ":", user[key]);
}

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// +++++++++++++++++++++++++ Nice way to extract value ++++++++++++++++++++++++++++
// const {isLoggedIn} = user;    // destructuring
// console.log(isLoggedIn);

// const {isLoggedIn : login} = user;  // can give some shorter name
// console.log(login);

// console.log(user.hasOwnProperty("isLoggedIn"));
// console.log(user.hasOwnProperty("isLoggedInnn"));

// console.log(user);

const regularUser = {
  email: "someone@gmail.com",
  fullName: {
    firstName: "Shubhi",
    lastName: "Sharma",
  },
  age: 20,
};

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.firstName);

// +++++++++++++++++++++++++ merging two objects ++++++++++++++++++++++++
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2); // (target, source, source, etc...);

const obj3 = { ...obj1, ...obj2 }; // +++++++++++++ object spreading +++++++++++++++
// console.log(obj3);

// ++++++++++++++++++++++ API +++++++++++++++++++++
// randomuser me
// https://api.github.com/users/priyannss