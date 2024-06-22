class user {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }

    static createId() {
        return `123`;
    }
}

const chai = new user("chai");
// console.log(chai.createId());



class Teacher extends user{
    constructor(username, email) {
        super(username);
        this.email = email;
    }

    addCourse() {
        console.log(`A new course added by ${this.username}`);
    }
}

const iphone = new Teacher("iphone", "iphone@apple.com");
iphone.logMe();
// console.log(iphone.createId());



// +++++++++++ calling the static function/ property
console.log(user.createId());