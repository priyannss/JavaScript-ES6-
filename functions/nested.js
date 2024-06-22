function one() {
    const username = "Priyanshu";

    function two() {
        const website = "youtube";
        console.log(username);
    }

    // console.log(website);
    two();
}

// one();



function addTwo(num) {
    return num+2;
}

// ++++++++++++++++++ hoisting +++++++++++++++++++++
const addOne = function(num) {
    return num+1;
}

console.log(addOne(4));