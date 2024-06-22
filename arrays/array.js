const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr, typeof(myArr));

const myArr2 = [0, 1, 2, 3, 4, 5, true, "Priyanshu"];
// console.log(myArr2, typeof myArr2);
// console.log(myArr2[1]);
// console.log(myArr2.toString());

// console.log(myArr2.includes(12));
// console.log(myArr2.includes(2));
// console.log(myArr2.indexOf(3));
// console.log(myArr2.indexOf(13));

// Shallow copy-> properties share the same reference point
// Deep copy-> properties do not share the same reference point

// arrays -> shallow copy

const ar = new Array(1, 2, 5, "happy", false);
// console.log(ar);


// ++++++++++++++++++++++++++++ push, pop, shift, unshift +++++++++++++++++++++++++++
let arr = new Array();
// arr.push(4);
// arr.push(6);
// arr.push(8);
// console.log(arr);

// console.log(arr.pop());

// arr.unshift(12);
// arr.shift();
// console.log(arr);

const newArr = myArr.join();
// console.log(newArr, typeof newArr);
// console.log(myArr, typeof(myArr));


// ++++++++++++++++++++++++++++++ slice, splice +++++++++++++++++++++++++++++++
// console.log(myArr.slice(1, 3));
// console.log(myArr);

// console.log(myArr.splice(1, 3));
// console.log(myArr);


// ++++++++++++++++++++++++++++ merging two array ++++++++++++++++++++++++++++++
const marvelHeros = ["thor", "Ironman", "spiderman"];
const dcHeros = ["flash", "superman", "batman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3]);
// console.log(marvelHeros[3][1]);

// console.log(marvelHeros.concat(dcHeros));   /// concat returns a new array
// console.log(marvelHeros);

const allNewHeros = [...marvelHeros, ...dcHeros];  // +++++++++++++ spread operator +++++++++++++++
// console.log(allNewHeros);

// ++++++++++++++++++++++++++++++++++ flat +++++++++++++++++++++++++++++++++++
const anotherArray = [1, 2, 3, 4, 5, 6, [2, 4, "happy"], [false, 2, [8, 9, true]]];
// const realAnotherArray = anotherArray.flat(1);
// const realAnotherArray = anotherArray.flat(Infinity);   // infinity-> it will automatically set the depth upto which it will flatten the array

// console.log(realAnotherArray);


// ++++++++++++++++++++++++++++++++ converting into array +++++++++++++++++++++++++++++++
// console.log(Array.isArray("Priyanshu"));
// console.log(Array.from("Priyanshu"));  // here you can give object, string etc....

// console.log(Array.from(
//     {
//         name: "Priyanshu",
//         techStacks: "Java, JS"
//     }
// ));  // here it does'nt know whom to convert into array wheather to keys or to value, so mention it

let score1 = 22;
let score2 = 29;
let score3 = 18;
console.log(Array.of(score1, score2, score3));
