// class creation
class user {
    // constructor
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // creating a method
    encryptPassword() {
        return `${this.password}abc`;
    }

    capitalizeUsername() {
        return this.username.toUpperCase();
    }
}

const chai = new user("chai", "chai@fb.com", "123");
console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.capitalizeUsername());



// +++++++++++++++++++++ behind the scene +++++++++++++++++++

// function user(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// user.prototype.encryptPassword = function() {
//     return `${this.password}abc`;
// }

// user.prototype.capitalizeUsername = function() {
//     return this.username.toUpperCase();
// }

// const newUser = new user("newUser", "newUser@fb.com", "123");
// console.log(newUser);
// console.log(newUser.encryptPassword());
// console.log(newUser.capitalizeUsername());