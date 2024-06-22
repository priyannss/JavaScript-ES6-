let arr = [1, 2, 3, 5, 7]

console.log(arr);
console.log(arr[1]);
console.log(arr.length);
console.log(typeof(arr));

arr[3] = 97;

console.log(arr);

console.log(arr.toString());
console.log(arr.join(" and "));

console.log(arr.pop());
console.log(arr);

arr.push(66);
console.log(arr);

// imp
arr.push("Priyanshu");
console.log(arr);

console.log(arr.shift());
console.log(arr);

arr.unshift("Jax");
console.log(arr);

// arr.delete[3] it deletes the 3rd element and this place will remain empty, this will be counted in length


let b = [3, 67];

let z = arr.concat(b);
console.log(z);
console.log(arr);
console.log(b);

console.log(z.splice(1, 4));
console.log(b);

let num = [1, 2, 3, 4, 5, 6, 7];
console.log(num.slice(5));
console.log(num);
console.log(num.slice(3, 5));

// num.forEach(
//     (value, index, num)=> {
//         console.log(value, index, num);
//     }
// )

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        console.log(key, obj[key]);
    }
}

for (const iterator of arr) {
    console.log(iterator);
}


// map

let nums = [1, 13, 5, 7, 11];

// let newArr = [];
// for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     newArr.push(element**2);
// }

let newArr = nums.map(
    (element) =>{
        return element**2;
    }
);
console.log(newArr);


// filter
console.log(nums.filter(
    (e)=> {
        if(e > 7) return true;
        return false;
    }
));


//reduce
let arr2 = [1, 2, 3, 5];
console.log(arr2.reduce(
    (a, b)=> {
        return a+b;
    }
));

// Array.from
console.log(Array.from("Priyanshu"));