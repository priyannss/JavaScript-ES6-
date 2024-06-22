function calculate(a, b, operator) {
    const val = Math.floor(Math.random() * 100) + 1;
    console.log(val);
    
    if(val <= 10) {
        switch (operator) {
            case "+":
                console.log(Math.abs(a-b));
                break;
            case "*":
                console.log(a+b);
                break;
            case "-":
                console.log(b!=0 ? (a/b) : 0);
                break;
            case "/":
                console.log(Math.abs(a**b));
                break;
        
            default: console.log("Invalid data!")
                break;
        }
    } else {
        switch (operator) {
            case "+":
                console.log(a+b);
                break;
            case "*":
                console.log(a*b);
                break;
            case "-":
                console.log(a-b);
                break;
            case "/":
                console.log(b!=0 ? (a/b) : "Division with 0 is not possible!");
                break;
        
            default: console.log("Invalid data!")
                break;
        }
    }
}

// let a = prompt("Enter first number : ");
// let b = prompt("Enter sec number : ");
// let c = prompt("Enter operaton : ");

// calculate(a, b, c);

calculate(2, 4, "-");
