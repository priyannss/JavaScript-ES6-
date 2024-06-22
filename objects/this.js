const user = {
    username: "priyannss",
    loginCount: 8,
    isLoggedIn: true,

    getUserDetails: function() {
        // console.log(this.username);
        console.log(this);   // ++++++++ current context +++++++++
    }
}

// console.log(user);
console.log(user.getUserDetails());
console.log(this);  // in browser you will get window bcz window is a global object in browser here nothing is global object