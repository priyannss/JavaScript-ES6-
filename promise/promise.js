// fetch("https://something.com").then().catch().finally();


// ++++++++++++++++++++++++++++++ promise creation +++++++++++++++++++++++++++++++++++
const promise1 = new Promise( function (resolve, reject) {
    // Do any async task
    // DB calls

    setTimeout(() => {
        console.log("Async task is completed.");
        resolve();
    }, 1000);
})

promise1.then(function () {
    console.log("Promise resolved.");
})



new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(()=> {
    console.log("Async task 2 resolved");
})



// ++++++++++++++++++++++++++++++ passing values through resolve +++++++++++++++++++++++++
const promise3 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve({
            userName: "priyannss",
            location: "India",
            id: 12345
        })
    }, 1000);
})

promise3.then(function(userObject) {
    console.log(userObject);
    // for (const key in userObject) {
    //     console.log(key , ": ", userObject[key]);
    // }
})


// ++++++++++++++++++++++++++++++ rejecting promise and then chaining +++++++++++++++++++++++++
const promise4 = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        let error = true;
        if(!error) {
            resolve({
                userName: "priyannss",
                location: "India",
                id: 12345
            })
        } else {
            reject("Error: data can't be retrieved!");
        }
    }, 1000)
})

// then chaining
promise4.then((userObject)=> {
    console.log(userObject);
    return userObject.userName;
}).then((username)=> {
    console.log(username);
}).catch((errMsg)=> {
    console.log(errMsg);
}).finally(()=> (console.log("The promise is either resolved or rejected.")))




// ++++++++++++++++++++++++++++ async Await ++++++++++++++++++++++++++++++++++++++
const promise5 = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        let error = true;
        if(!error) {
            resolve({
                userName: "javascript",
                password: "abc123"
            })
        } else {
            reject("Error: JS data can't be retrieved!");
        }
    }, 1000)
})

async function consumePromiseFive() {
    // await promise5;
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();




// +++++++++++++++++++++++++++++++++ fetch +++++++++++++++++++++++++++++
async function getAllUsers(){
    try {
        // const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const response = await fetch("https://api.github.com/users/priyannss");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

getAllUsers();

// same using then catch
fetch("https://api.github.com/users/priyannss")
.then((response)=> {
    return response.json();
})
.then((data)=> {
    console.log(data);
})
.catch((error)=> {
    console.log(error);
})
