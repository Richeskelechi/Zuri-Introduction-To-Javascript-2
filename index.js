// function for my addtion calculator 
function addtion(num1, num2) {
    return num1 + num2;
}
// function for my subtraction calculator 
function subtraction(num1, num2) {
    return num1 - num2;
}
// function for my multiplication calculator 
function multiplication(num1, num2) {
    return num1 * num2;
}
// function for my division calculator 
function division(num1, num2) {
    return num1 / num2;
}
// function to ensure that the two values enterd by the user are numbers
function inValidInput(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return true;
    }
    return false;
}
// function to take care of the case when a user is dividing a value by zero(0)
function notANumber(number) {
    if (number == 0) {
        return true;
    } else {
        return false;
    }
}
// variable to allow the program to keep running as long as the user wants
let keep_Running = true;
// function to allow the user try again for just two times(2x)
function tryAgain() {
    // here I am declaring the value of chance to be 1. That is as long as the value is >0, the user can try again.
    let chance = 1
    let try_again = true;
    while (try_again) {
        let answer = prompt("Do you want to continue? (y/n). You Have " + (chance + 1) + " chance(s) Left");
        answer = answer.toLowerCase();
        if (answer === "y") {
            // if the user selects 'y' then the program will continue to run
            try_again = false;
            calculator()
        } else if (answer === "n") {
            try_again = false;
            endGame()
        } else {
            alert("Invalid Input");
            // if the user enters an invalid input then the program will ask the user to try again
            // here I am decreasing the value of chance by 1.
            chance--;
            if (chance < 0) {
                alert("You have no chance left");
                try_again = false;
                endGame()
            }
        }
    }
}
// This function is called when the user wants to end the program.
function endGame() {
    alert("Thank You For Playing. The Program Will Now Close");
    keep_Running = false;
}
// This Is The main function That will be executed Once the page Loads
function calculator() {
    // As long as keep_Running is true, the program will run
    while (keep_Running) {
        // Here I am asking the user to make a selection to determine the operation you want to perform
        let selection = prompt("Enter the operation you want to perform: +, -, *, /");
        // if the selection is not among the listed solution. alert(Invalid Input) and allow the user to try again
        if (selection != '+' && selection != '-' && selection != '*' && selection != '/') {
            alert("Invalid input");
            tryAgain();
        } else {
            // here I am asking for his first Number which I am also converting to a number(To be sure that it is a number)
            let num1 = parseInt(prompt("Enter the first number"));
            // here I am asking for his second Number which I am also converting to a number(To be sure that it is a number)
            let num2 = parseInt(prompt("Enter the second number"));
            // if the selection the user made is '+'
            if (selection === "+") {
                // Here I am calling the invalidInput function to check if the two values are numbers
                if (inValidInput(num1, num2)) {
                    // if the function return true, then one or the two values is not a number
                    alert("Invalid input!!. Both Inputs Must Be A Number");
                }
                else {
                    // if false, perform the addtion function
                    alert("The Sum of " + num1 + " And " + num2 + " is " + addtion(num1, num2));
                }
                // Here I am calling the tryAgain function to allow the user to try again
                tryAgain();
            }
            // if the selection the user made is '-'
            else if (selection === "-") {
                // Here I am calling the invalidInput function to check if the two values are numbers
                if (inValidInput(num1, num2)) {
                    // if the function return true, then one or the two values is not a number
                    alert("Invalid input!!. Both Inputs Must Be A Number");
                }
                else {
                    // if false, perform the subtraction function
                    alert("The Diffrence Between " + num1 + " And " + num2 + " is " + subtraction(num1, num2));
                }
                // Here I am calling the tryAgain function to allow the user to try again
                tryAgain();
            }
            // if the selection the user made is '*'
            else if (selection === "*") {
                // Here I am calling the invalidInput function to check if the two values are numbers
                if (inValidInput(num1, num2)) {
                    // if the function return true, then one or the two values is not a number
                    alert("Invalid input!!. Both Inputs Must Be A Number");
                }
                else {
                    // if false, perform the multiplication function
                    alert("The Product of " + num1 + " And " + num2 + " is " + multiplication(num1, num2));
                }
                // Here I am calling the tryAgain function to allow the user to try again
                tryAgain();
            }
            // if the selection the user made is '/'
            else {
                // Here I am calling the invalidInput function to check if the two values are numbers
                if (inValidInput(num1, num2)) {
                    // if the function return true, then one or the two values is not a number
                    alert("Invalid input!!. Both Inputs Must Be A Number");
                }
                else {
                    // Here I am checking to ensure that the user is not dividing by zero(0). So I am calling the notANumber function
                    if (notANumber(num2)) {
                        alert("Invalid input!!. You Can't Divide By 0");
                    } else {
                        // if false, perform the division function
                        alert("The Quotient Between " + num1 + " And " + num2 + " is " + division(num1, num2));
                    }
                }
                // Here I am calling the tryAgain function to allow the user to try again
                tryAgain();
            }
        }
    }
}
// Here I am calling the calculator function to start the program
calculator()
