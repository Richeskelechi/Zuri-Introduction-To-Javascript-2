function addtion(num1, num2) {
    return num1 + num2;
}
function subtraction(num1, num2) {
    return num1 - num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}
function inValidInput(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return true;
    }
    return false;
}
function notANumber(number) {
    if (number == 0) {
        return true;
    } else {
        return false;
    }
}
var keppRunning = true;
function tryAgain() {
    let chance = 1 + 0
    chance = parseInt(chance)
    while (chance >= 0) {
        let answer = prompt("Do you want to continue? (y/n). You Have " + (chance + 1) + " chance(s) Left");
        answer = answer.toLowerCase();
        if (answer === "y") {
            break
        } else if (answer === "n") {
            alert("Thank You For Your Time. The program will be closed");
            keppRunning = false;
            break;
        } else {
            alert("Invalid Input");
            chance--;
            if (chance < 0) {
                alert("You have no chance left. The program will be closed");
                keppRunning = false;
                break;
            }
        }
    }
}
while (keppRunning) {
    let selection = prompt("Enter the operation you want to perform: +, -, *, /");
    if (selection != '+' && selection != '-' && selection != '*' && selection != '/') {
        alert("Invalid input");
        tryAgain();
    } else {
        let num1 = parseInt(prompt("Enter the first number"));
        let num2 = parseInt(prompt("Enter the second number"));
        if (selection === "+") {
            if (inValidInput(num1, num2)) {
                alert("Invalid input!!. Both Inputs Must Be A Number");
            }
            else {
                alert("The Sum of " + num1 + " And " + num2 + " is " + addtion(num1, num2));
            }
        }
        else if (selection === "-") {
            if (inValidInput(num1, num2)) {
                alert("Invalid input!!. Both Inputs Must Be A Number");
            }
            else {
                alert("The Diffrence Between " + num1 + " And " + num2 + " is " + subtraction(num1, num2));
            }
        }
        else if (selection === "*") {
            if (inValidInput(num1, num2)) {
                alert("Invalid input!!. Both Inputs Must Be A Number");
            }
            else {
                alert("The Product of " + num1 + " And " + num2 + " is " + multiplication(num1, num2));
            }
        }
        else {
            if (inValidInput(num1, num2)) {
                alert("Invalid input!!. Both Inputs Must Be A Number");
            }
            else {
                if (notANumber(num2)) {
                    alert("Invalid input!!. You Can't Divide By 0");
                } else {
                    alert("The Quotient Between " + num1 + " And " + num2 + " is " + division(num1, num2));
                }
            }
        }
    }
    tryAgain();
}