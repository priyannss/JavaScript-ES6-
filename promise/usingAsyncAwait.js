async function getData() {                            // ####
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3000);
  });
}

async function main() {                              // #####
  console.log("Loading Module");
  console.log("Do something else");
  console.log("Load data");

  let data = await getData();                        // #####
    //   since awit can only be used inside async so we are creating a async function and wrapping other things inside this function 

  console.log(data);
  console.log("Process data..");
  console.log("Task 2");
}

main();
