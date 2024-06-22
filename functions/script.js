function nice(name) {
    // console.log(name + ", You are nice person!")
}

nice("Priyanshu");
nice("Atharva")
nice("Raghav")


// returning a value from a function
function sum(a, b) {
    return a+b;
}

// console.log(sum(2, 3));
// console.log(sum(4, 8));

function product(a, b=2) {
    return a*b;
}

// console.log(product(4));
// console.log(product(12));


// arrow function
const func = (x) => {
    // console.log("I am an arrow function " + x);
}

func(2);
func(3);


// function loginUserMessage(username) {
//     return `${username} just logged in`;
// }

// console.log(loginUserMessage("Priyanshu"));
// console.log(loginUserMessage());    // if you dont pass any value

function loginUserMessage(username) {
    if(!username) {
        return "please enter a username";
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Priyanshu"));
// console.log(loginUserMessage());

function loginUserMessage(username = "Priyanshu") {
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Atharva")); // when you will pass any value then it will be over written on default value
// console.log(loginUserMessage());   // when you will not pass any value then default value will be taken

// +++++++++++++++++++++ rest/spread operator   (...) triple dot +++++++++++++++++++++++++
function calculateCartPrice(...prices) {        // here ... is rest operator
    let totalPrice = 0;
    prices.forEach ((price)=> {
        totalPrice += price;
    })

    return totalPrice;
}
// console.log(calculateCartPrice(200, 400, 600, 899, 499));

function calculateCartPrice(num1, num2, ...prices) {
    return prices;
}
// console.log(calculateCartPrice(200, 400, 600, 800));

let user = {username: "priyannss", price: 390}

function handleObject(anyObject) {
    return `Username is ${anyObject.username} and price is ${anyObject.price}`;
}
console.log(user);