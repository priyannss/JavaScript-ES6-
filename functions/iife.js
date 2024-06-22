// Imediately Invoked Function Expressions (IIFE)
// () ();

// why to use IIFE
// Encapsulation: IIFE allows you to encapsulate variables and functions within a local scope, preventing them from polluting the global scope.

(function chai() {
    console.log("DB Connected.");
}) ();

(()=> {
    console.log("Hello there!");
}) ();

((name)=> {
    console.log(`Hello ${name}!`);
}) ("Priyanshu");
