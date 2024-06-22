const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// +++++++++++++++++++++ filter ++++++++++++++++++++++

// const newNums = nums.filter( (val)=> {
//     return val > 5;
// } )
const newNums = nums.filter( (val)=> (val > 5) )

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const historyBooks = books.filter((bookObject)=> (bookObject.genre === "History"));
// console.log(historyBooks);

const newBooks = books.filter((bookObject)=> {
    return bookObject.publish >= 2000;
});
// console.log(newBooks);



// ++++++++++++++++++++++++++ map +++++++++++++++++++++++++

const renewedNums = nums.map( (val)=> (val**2) )
// console.log(renewedNums);


// chaining
// const someArr = nums.map( (val)=> {
//     return val*10;
// }).map( (val)=> {
//     return val+1;
// }).filter( (val)=> {
//     return val>40
// });
const someArr = nums.map( (val)=> (val*10) ).map( (val)=> (val+1) ).filter( (val)=> (val>40) );
// console.log(someArr);



// +++++++++++++++++++++++++++ reduce +++++++++++++++++++++++++++++

const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// const sum = numbers.reduce( function (accumulator, currentValue) {
//     return accumulator+currentValue;
// }, 0)
const sum = numbers.reduce((accumulator, currentValue) => (accumulator + currentValue), 0); // here 0 is initial value

console.log(sum);
