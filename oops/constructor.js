// const myPromise = new Promise();
// const myDate = new Date(); // constructor call


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    // return this; // wheather write or not, it is implicitly defined
}

// const userOne = User("priyannss", 8, true);
// const userTwo = User("Raghav", 12, false);
const userOne = new User("priyannss", 8, true);
const userTwo = new User("Raghav", 12, false);
console.log(userOne, typeof userOne);
console.log(userTwo);

userOne.greeting();
console.log(userOne.constructor);
console.log(userTwo instanceof User);