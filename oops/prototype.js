// function --> Object --> null
// Array --> Object --> null
// String --> Object --> null



let myName = "Priyanshu     ";

// console.log(myName.length);
// console.log(myName.trim());
// console.log(myName.trim().length);



let myHeros = ["Thor", "Spiderman"];

let heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.Spiderman}`);
    }
};


Object.prototype.priyans = function() {
    console.log(`priyans is present in all object.`);
}

Array.prototype.heyPriyanshu = function() {
    console.log(`Priyanshu says hello`);
} // this method is only available to array

// myName.priyans();
// myHeros.priyans();
// heroPower.priyans();

// myName.heyPriyanshu();     // not available
// myHeros.heyPriyanshu();    // this method is only available to array
// heroPower.heyPriyanshu();     // not available




// +++++++++solution to first ++++++++++++++
let userName = "priyannss       "
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`${this.length}`);
    console.log(`True length is: ${this.trim().length}`);
}

userName.trueLength();
"Atharva       ".trueLength();