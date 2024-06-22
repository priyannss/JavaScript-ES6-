let map = new Map();
// console.log(map);

map.set("IN", "India")
map.set("US", "United States")
map.set("GER", "Germany")
map.set("IN", "India")
// here india will not be inserted again bcz map holds unique values only
// in map order also remains same

// console.log(map);

for (const val of map) {
    console.log(val);
}

for (const [key, value] of map) {
    console.log(key, ": ", value);
}
// like you are iterating in map, in objects it is not iterable