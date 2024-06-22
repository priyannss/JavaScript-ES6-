function setUsername(username) {
    this.username = username;
}

function createUser(username, email, password) {
    // setUsername(username); // here it is being called and after execution it is being removed from the call-stack memory so thats why it is not showing in output
    // setUsername.call(username); // the same thing will happen here as well
    setUsername.call(this, username); // here passing this as well so now the setUsername function will use this function's current context rather than using its own (this) context which is being removed from call stack after execution.

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123abc");
console.log(chai);