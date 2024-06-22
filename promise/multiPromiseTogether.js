let prom1 = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < 0.5) {
        reject("No this number is not allowed!!     1");
    } else {
        setTimeout(() => {
            console.log("Happy to be here!! 1");

            resolve("I am done 1");
        }, 2000);
    }
});

let prom2 = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < 0.5) {
        reject("No this number is not allowed!!   2");
    } else {
        setTimeout(() => {
            console.log("Happy to be here!!   2");

            resolve("I am done 2");
        }, 1000);
    }
});

let prom3 = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < 0.5) {
        reject("No this number is not allowed!!   3");
    } else {
        setTimeout(() => {
            console.log("Happy to be here!!   3");

            resolve("I am done 3");
        }, 3000);
    }
});

// let p = Promise.all([prom1, prom2, prom3]);
// let p = Promise.allSettled([prom1, prom2, prom3]);
// let p = Promise.race([prom1, prom2, prom3]);
let p = Promise.any([prom1, prom2, prom3]);

p.then((arg) => {
    console.log(arg);
}).catch((err) => {
    console.log(err);
});