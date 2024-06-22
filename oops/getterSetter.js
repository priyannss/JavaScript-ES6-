class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    // getter
    get password() {
        // return this._password.toUpperCase();
        return `${this._password}userHey`
    }

    // setter
    set password(pass) {
        this._password = pass;
    }
}

const obj1 = new User("obj1@meta.com", "123abc");
console.log(obj1.password);