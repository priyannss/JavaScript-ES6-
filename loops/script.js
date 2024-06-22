// for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i+1);
// }

let obj = {
    name: "Priyanshu",
    role: "Programmer",
    interest: "WebD"
};
    
// for in loop
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element);
//     }
// }
for (const key in obj) {
    console.log(key, obj[key]);
}

// forof loop -> object is not iterable

// while loop
let i=1;
while(i < 4) {
    console.log(i);
    i++;
}

// do while loop
i = 1;
do {
    console.log(i++);
} while (i < 4);



const coding = ["Js", "ruby", "Java", "py", "cpp"];

// forof loop
for (const val of coding) {
    console.log(val);
}
for (const char of "Priyanshu") {
    console.log(char);
}

// forin loop
for (const key in coding) {
    console.log(key, coding[key]);
}

// forEach loop
coding.forEach((val)=> {
    console.log(val);
})
coding.forEach( function (val) {
    console.log(val);
})
coding.forEach((val, index, array)=> {
    console.log(val, index, array);
})




let myCoding = [
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "JavaScript",
        languageFileName: "Js"
    }
]

myCoding.forEach((obj)=> {
    // console.log(obj.languageName);
    // console.log(obj.languageFileName);
    for (const key in obj) {
        console.log(key, ":-", obj[key]);
    }
})