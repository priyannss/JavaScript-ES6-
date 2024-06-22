let adjectives = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

let shopName = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}

let anotherWord = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}

let randomNumber1 = Math.floor((Math.random()*3 ) + 1)
let randomNumber2 = Math.floor((Math.random()*3 ) + 1)
let randomNumber3 = Math.floor((Math.random()*3 ) + 1)

const businessName = adjectives[randomNumber1] + " " + shopName[randomNumber2] + " " + anotherWord[randomNumber3]

console.log(businessName);