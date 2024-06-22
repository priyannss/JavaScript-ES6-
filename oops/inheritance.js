class user {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@fb.com", "123");
console.log(chai);
chai.logMe();
chai.addCourse();

const tea = new user("tea");
console.log(tea);
tea.logMe();
// tea.addCourse();  // not available for this


console.log(chai == tea);
console.log(chai === tea);
console.log(chai instanceof user);
console.log(chai instanceof Teacher);