const User = {
    _email: "user@google.com",
    _password: "123abc",

    get email() {
        return this._email.toUpperCase();
    },

    set email(email) {
        this._email = email;
    }
}

const tea = Object.create(User);
console.log(tea.email);