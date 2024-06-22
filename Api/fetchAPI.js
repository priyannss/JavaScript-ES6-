async function getData() {
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1"); // first we are fetching the data so we are using await
  let data = await x.json(); // here we are parsing the data into json so we are using await
  // let data = await x.text();      // we can also parse the data into a text as well
  // console.log(data);

  return data; // returning the promise data
}

async function main() {
  console.log("Loading Module");
  console.log("Do something else");
  console.log("Load data");

  let data = await getData();

  console.log(data);
  console.log("Process data..");
  console.log("Task 2");
}

main();

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully
