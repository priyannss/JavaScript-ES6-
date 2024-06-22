const user = {
    username: "Priyanshu",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Raghav";
// user.welcomeMessage();

// console.log(this);


// const myFunc = function() {
//     let username = "Atharva"
//     console.log(this);
//     console.log(this.username);
// }

const myFunc = ()=> {
    let username = "Atharva";
    console.log(this);
    console.log(this.username);
}
// myFunc();


// ++++++++++++++++++++++++++++ arrow function ()=> {} ++++++++++++++++++++++++++
// const addTwo = (num1, num2)=> {
//     return num1+num2;
// }
// const addTwo = (num1, num2)=> num1+num2;
const addTwo = (num1, num2)=> (num1+num2);
// if you are wrapping it with curly braces then you have to write return and if you are wrapping it with parenthesis or not wrapping at all then no need to write return

console.log(addTwo(3, 4));