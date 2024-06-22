function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        set: function(val) {
            this._email = val;
        },

        get: function() {
            return this._email.toUpperCase();
        }
    })
}

const chai = new User("chai@meta.com", "123abc");
console.log(chai);
console.log(chai.email);