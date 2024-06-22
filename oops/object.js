function multipleBy5(num) {
    return num*5;
}

multipleBy5.power = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);


function createUser(username, score) {
    this.username = username;
    this.score = score;
}

// if you want to add a prototype to your function
createUser.prototype.increment = function() {
    // ++score; // if you will do this then it will not know to which user's score you want to increment
    ++this.score;
}

createUser.prototype.printme = function() {
    console.log(`${this.username}'s score is: ${this.score}`);
}

const user1 = new createUser("priyannss", 18);
const user2 = new createUser("raghav", 14);
// console.log(user1);
// console.log(user2);

// user2.increment();
// console.log(user1);
// console.log(user2);


user1.printme();
user2.printme();
