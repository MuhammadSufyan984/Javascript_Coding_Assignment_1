/*  Question 1: Variable Declarations and Initialization

Create three variables: productName (string with value "Laptop"), 
price (number with value 999.99), and inStock (boolean with value true). 
Console.log all three variables in a single statement.*/



//CODE:

{
    let productName = "Laptop";
    let price = 999.99;
    let inStock = true;

    console.log(`The Product Name is ${productName}, 
and its price is ${price}, 
it is available in stock :  ${inStock}`);


}

// Question 2: Mathematical Operations

//CODE:
{
    // The remainder when 27 is divided by 4
    let num1 = 27;
    let num2 = 4;
    let remainder = num1 % num2;
    console.log(`The remainder of ${num1} divided by ${num2} is : ${remainder}`);
}


//  The square of 12 (using exponentiation operator **)
{
    let num = 12
    let square = num ** 2;
    console.log(`The square of ${num} is : ${square}`);

}

// The result of incrementing 8 by 1 using the ++ operator
{
    let num = 8;
    num++;
    console.log(`The value of ${num - 1} after increment by 1 is : ${num}`);

}

// The result of decrementing 15 by 2 using the -= operator

{
    let num = 15;
    num -= 2;
    console.log(`The value of 15 after decrement by 2 is : ${num}`);
}


// Question 3: String Concatenation and Case Conversion

// Create two string variables: firstName = "alex" and lastName = "SMITH". 
// Concatenate them with a space, then convert the result to 
// proper case (first letter uppercase, rest lowercase). 
// Also find the total length of the full name

//CODE:
{
    let firstName = "alex";
    let lastName = "SMITH";

    let fullName = (firstName + " " + lastName).toLowerCase();

    // Method # 1
    let fullNameProperCase = fullName.slice(0, 1).toUpperCase() + fullName.slice(1, firstName.length) + " " + fullName.slice(fullName.indexOf(" ") + 1, fullName.indexOf(" ") + 2).toUpperCase() + fullName.slice(fullName.indexOf(" ") + 2);
    let length = fullNameProperCase.length;
    console.log(fullNameProperCase);


    // Method # 2
    // function firstLetterUpperCase() 
    // {
    //     let name = fullName[0].toUpperCase();
    //     for (var i = 1; i < fullName.length; i++) {

    //         if (fullName[i] !== " ") {

    //             name += fullName[i];
    //         }
    //         else {
    //             name += fullName[i];
    //             name += fullName[i + 1].toUpperCase();
    //             i++;
    //         }
    //     }
    //     return name;

    // }
    // let name = firstLetterUpperCase();
    // console.log(name);

    console.log(`The length of Full Name is : ${length}`);

}

// Question 4: if-else Conditional Logic

// Write an if-else statement that checks a temperature variable. 
// If temperature is above 30, console.log "Hot day". 
// If between 20 and 30 (inclusive), console.log "Pleasant day". 
// Otherwise, console.log "Cold day". Test with temperature = 25.

// CODE
{
    let temperature = 25;

    if (temperature > 30) {
        console.log("Hot Day");
    }

    else if (temperature <= 30 && temperature >= 20) {
        console.log("Pleasant Day");
    }

    else {
        console.log("Cold Day");

    }
}


// Question 5: Comparison Operators
// Create three comparison operations:


// Check if 15 is strictly equal to "15"
{
    let num = 15;
    let str = "15";
    if (num === str) {
        console.log("strictly equal");
    }
    else {
        console.log("strictly not equal");
    }
}

// Check if 20 is greater than 15 AND less than 25
{
    let num25 = 25;
    let num20 = 20;
    let num15 = 15;

    if (num20 > num15 && num20 < num25) {
        console.log("Condition True");
    }
    else {
        console.log("Condition false");

    }
}

// Check if 10 is not equal to 10 OR 5 is greater than 3
{
    let num10 = 10;
    let num5 = 5;
    let num3 = 3;

    if (num10 !== 10 || num5 > 3) {
        console.log("condition True");
    }
    else {
        console.log("condition false");
    }
}


// Question 6: Array Manipulation - Basics
// Create an array colors with values ["red", "green", "blue"]. Then:

// Add "yellow" to the end
// Remove the first element
// Insert "purple" at index 1
// Console.log the final array and its length

//CODE 

{
    let arr = ["red", "green", "blue"];
    arr.push("yellow");
    arr.shift();
    arr.splice(1, 0, "purple")
    console.log(arr);
    console.log("The Length of array is " + arr.length);

}


// Question 7: Array Manipulation - splice()

//Start with array 
// fruits = ["apple", "banana", "cherry", "date", "elderberry"].Use splice() to: 

//CODE
{
    let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

    // Remove "cherry"
    fruits.splice(2, 1);
    console.log(fruits);

    // Replace "date" with "dragonfruit"
    fruits.splice(2, 1, "dragonfruit");
    console.log(fruits);


    // Extract the middle 3 elements into a new array

    let newFruitsList = fruits.splice(1, 3);
    console.log(newFruitsList);
    console.log(fruits);

}


// Question 8: for Loop - Number Sequence
// Write a for loop that prints numbers from 1 to 10, 
// but skips number 5 using continue, and stops at 8 using break. 
// Also calculate the sum of all printed numbers.
{
    let count = 0;
    for (let i = 1; i <= 10; i++) {

        if (i !== 5 && i !== 8) {

            count += i;
            console.log(`The Number is : ${i} and count is : ${count}`);
        }
        else {
            if (i === 5)
                continue;
            else {

                break;
            }
        }

    }
    console.log(`The Total Count is : ${count}`);
}


// Question 9: Nested for Loop - Pattern

{
    for (let i = 0; i < 5; i++) {
        let str = "";
        for (let j = 0; j <= i; j++) {

            str += "* "
        }
        console.log(str);
    }
}


// Question 10: String Methods - Search and Extract
// Given text = "The quick brown fox jumps over the lazy dog":
{
    const text = "The quick brown fox jumps over the lazy dog";

    //     Find the position of "fox"
    const position = text.indexOf("fox");
    console.log(`The Position of fox in text at index : ${position}`);


    // Extract "brown fox" using substring/slice
    const strForSearch = "brown fox";
    const atIndexOf = text.indexOf("brown fox");
    const extractString = text.slice(atIndexOf, atIndexOf + strForSearch.length)
    console.log(extractString);

    // Check if the text contains "dog"
    if (text.indexOf("dog") !== -1) {
        console.log("Yes, the text contain word dog!");
    }
    else {
        console.log("No, the text contain word dog!");
    }
    // Get the character at position 10
    var characterAtPositionTen = text.charAt(10);
    console.log(`${characterAtPositionTen} is present at position 10`);

}


// Question 11: String Replacement
// Given sentence = "I love JavaScript and JavaScript is awesome":

{
    let text = "I love JavaScript and JavaScript is awesome";

    // Replace the first "JavaScript" with "coding"
    let replacetext = text.replace("JavaScript", "Coding")
    console.log(replacetext);

    // Replace ALL "JavaScript" with "JS"
    let replaceAll = text.replace(/JavaScript/g, "JS");
    console.log(replaceAll);

    // Replace "awesome" with uppercase "AWESOME"
    let replaceWithUppercase = text.replace("awesome", "AWESOME");
    console.log(replaceWithUppercase);

}


// Question 12: Number Rounding and Formatting
// Given num = 123.456789:

{
    let num = 123.456789;

    // Round to 2 decimal places
    let roundedNum = num.toFixed(2)
    console.log(`after round 2 decimal place : ${roundedNum}`);

    // Round to nearest integer
    let roundToInt = Math.round(num);
    console.log(`after decimal to Integer : ${roundToInt}`);

    // Get the floor value
    let roundToFloor = Math.floor(num);
    console.log(`after round to floor : ${roundToFloor}`);

    // Get the ceiling value
    let roundToCeil = Math.ceil(num);
    console.log(`after round to ceil : ${roundToCeil}`);

    // Format to show exactly 4 decimal places
    let roundedNumFourDecimal = num.toFixed(4);
    console.log(`after round to four decimal : ${roundedNumFourDecimal}`);
}

// Question 13: Random Number Generation
{
    // A random integer between 1 and 100 (inclusive)
    let num1 = Math.ceil(Math.random() * 100);
    console.log(num1);

    // A random decimal between 0 and 1 with 3 decimal places
    let num2 = Math.random().toFixed(3);
    console.log(num2);

    // A random number between 50 and 75 (inclusive)

    let num3 = Math.floor(Math.random() * (75 - 50 + 1)) + 50;
    console.log(num3);

}


// Question 14: Type Conversion
{
    // Convert string "123" to number
    let strNum1 = "123";
    let strToNum = parseInt(strNum1);
    console.log(strToNum);

    // Convert string "45.67" to decimal (float)
    let strNum2 = "45.67";
    let strToDecimal = parseFloat(strNum2);
    console.log(strToDecimal);

    // Convert number 789 to string

    let num = 789;
    let numToStr = num.toString();
    console.log(numToStr);

    // Check the type of "true" after converting to boolean

    let str = "true";
    let strToBool = Boolean(str);
    console.log(typeof (strToBool));
    console.log(strToBool);
}

// Question 15: Date and Time Operations
// Create a Date object for the current time and:
{
    // Extract the year, month (0-11), and day
    let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July",
        "Aug", "Sep", "Oct", "Nov", "Dec"];

    let dayArray = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

    let d = new Date();

    let year = d.getFullYear();
    let month = d.getMonth();

    let day = d.getDay();
    console.log(`${dayArray[day]}  ${monthArray[month]}  ${year}`);

    // Get the hours in 24-hour format
    let hours = d.getHours()
    console.log(`Hours (24-hour) : ${hours}`);


    // Format it as "YYYY-MM-DD"
    let formattedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    console.log(`Date with format YYYY-MM-DD : ${formattedDate}`);

    // Create a specific date for December 25, 2024
    let specificDate = new Date("December 25, 2024");
    console.log(specificDate);
}

// Question 16: Function - Basic Calculator
// Write a function calculate that takes two numbers and 
// an operator (+, -, *, /) as parameters and returns the result. 
// Handle division by zero by returning "Error: Division by zero".

//CODE

{
    function calculate(num1, num2, operator) {
        let result = "";
        let calc;
        switch (operator) {
            case "+":
                calc = num1 + num2;
                result = `The Sum Of ${num1} + ${num2} is : ${calc}`;
                break;
            case "-":
                calc = num1 - num2;
                result = `The Subtraction Of ${num1} - ${num2} is : ${calc}`;
                break;
            case "*":
                calc = num1 * num2;
                result = `The Multiplication Of ${num1} * ${num2} is : ${calc}`;
                break;
            case "/":
                calc = num1 / num2;

                if (calc !== Infinity)
                    result = `The Division Of ${num1} / ${num2} is : ${calc}`;
                else
                    result = `Error: Division by zero`;
                break;
            default:
                result = "kindly Enter only valid operation mark +,-,*,/"
        }
        return result;
    }

    let result;

    result = calculate(4, 3, "+")
    console.log(result);

    result = calculate(4, 3, "-")
    console.log(result);


    result = calculate(4, 3, "*")
    console.log(result);


    result = calculate(10, 2, "/")
    console.log(result);

    result = calculate(10, 0, "/")
    console.log(result);
}

// Question 17: Function - Local vs Global Variables
// Create a global variable globalCounter = 0. 
// Write a function incrementCounter that declares a 
// local variable with the same name and increments it, 
// while also incrementing the global variable. 
// Show the difference after calling the function twice.

{
    var counter = 0;
    function incrementCounter() {
        var counter = 0
        counter++;
        window.counter++;
        console.log(`The Local count is ${counter}`);

    }

    incrementCounter();
    incrementCounter();

    console.log(`The Global count is ${counter}`);

}


// Question 18: switch Statement - Day of Week
// Write a switch statement that takes a number (0-6) and 
// returns the corresponding day name (0=Sunday, 1=Monday, etc.).
//  Include a default case for invalid numbers.

//CODE 
{
    function dayOfWeek(dayNum) {
        switch (dayNum) {
            case 0:
                console.log("Sunday");
                break;

            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;

            default:
                console.log("Invalid Number");

        }
    }
    dayOfWeek(0);
    dayOfWeek(1);
    dayOfWeek(9)
}


// Question 19: while Loop - Countdown
// Write a while loop that starts at 10 and counts down to 1, 
// printing each number. Then print "Blast off!". 
// Also calculate the factorial of 5 using a while loop.

{
    let startNum = 10;
    let factorialOfFive = 1;
    while (startNum > 0) {
        console.log("The number is : " + startNum);
        if (startNum <= 5)
            factorialOfFive *= startNum;

        startNum--;
    }
    console.log("Blast off!");
    console.log("The factorial of 5 is : " + factorialOfFive);

}

// Question 20: do...while Loop - User Input Simulation
// Create a do...while loop that simulates asking for a password. 
// Start with enteredPassword = "" and keep "asking" (incrementing a counter)
//  until enteredPassword === "secret123" or 5 attempts are made.
{
    let enteredPassword = "";
    let counter = 1;
    do {
        enteredPassword = prompt("Please Enter password ,Only 5 attempts are allowed , This is " + counter + " attempt.", "secret123");
        counter++;
    } while (enteredPassword !== "secret123" && counter <= 5);

}

// Question 21: Array Methods with for Loop
// Given numbers = [12, 45, 78, 23, 56, 89, 34]:
{
    // Use a for loop to find the maximum value
    let arr = [12, 45, 78, 23, 56, 89, 34];
    let maxValue = 0;
    let indexNum;
    let arrAvg = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > maxValue) {
            maxValue = arr[i];
            indexNum = i;
        }

        arrAvg += arr[i];
    }
    console.log(`The maximaum value is ${maxValue} at index number ${indexNum}`);

    // Use a for loop to calculate the average

    console.log(`The average of array elements is ${(arrAvg / arr.length).toFixed(2)}`);

    // Create a new array with only numbers greater than 50
    let arr2 = arr.filter((a) => {
        return a > 50;
    })
    console.log("The new array with elements value greater than 50 is", arr2);

    // Reverse the array without using reverse() method

    console.log(`Before reverse`, arr);

    let arrHalfLength = Math.floor(arr.length / 2);
    for (let i = 0; i < arrHalfLength; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - (i + 1)];
        arr[arr.length - (i + 1)] = temp;
    }

    console.log("After reverse", arr);
}

// Question 22: Event Handling Simulation
// Create a function handleClick that:

// Gets a value from an input field with id "username"
// Checks if it's empty and shows an alert if so
// Otherwise, displays "Welcome, [username]!" in a paragraph with id "greeting"
// Resets the input field after greeting

//CODE 


function handleClick() {
    // Get the input field
    const input = document.getElementById("username");
    const username = input.value.trim();

    // Check if input is empty
    if (username === "") {
        alert("Please enter your Name.");
        return;
    }

    // Display greeting
    document.getElementById("greeting").textContent = `Welcome, ${username}!`;

    // Reset the input field
    input.value = "";
}

// Question 23: Form Validation Function
// Write a function validateForm that:

// Takes email and password as parameters
// Returns true if email contains "@" and password length ≥ 8
// Otherwise returns false with specific error messages
// Test with multiple test cases
{
    function validateForm(email, password) {
        if (email.indexOf("@") === -1) {
            console.log("Error: Invalid email. Email must contain '@'.");
            return false;
        }
        if (password.length < 8) {
            console.log("Error: Password must be at least 8 characters long.");
            return false;
        }

        return true;
    }

    // Test Cases
    console.log(validateForm("user@example.com", "password123"));
    console.log(validateForm("userexample.com", "password123"));
    console.log(validateForm("user@example.com", "pass12"));
    console.log(validateForm("userexample.com", "pass12"));
}


// Question 24: Temperature Converter
// Create a function convertTemperature that:

// Takes a temperature and a unit ("C" or "F") as parameters
// Converts Celsius to Fahrenheit: (C × 9/5) + 32
// Converts Fahrenheit to Celsius: (F - 32) × 5/9
// Returns the converted value with 1 decimal place


{
    function convertTemperature(temp, unit) {
        if (unit === "C") {
            return ((temp * 9 / 5) + 32).toFixed(1) + " C";
        } else if (unit === "F") {
            return (((temp - 32) * 5 / 9)).toFixed(1) + " F";
        } else {
            return "Invalid unit";
        }
    }

    // Examples
    console.log(convertTemperature(25, "C")); // "77.0"
    console.log(convertTemperature(77, "F")); // "25.0"
    console.log(convertTemperature(100, "C")); // "212.0"
    console.log(convertTemperature(32, "F")); // "0.0"
}


// Question 25: Shopping Cart Array Operations
// Create an array cart = [] and write these functions:

// addItem(name, price): Adds item object to cart
// removeItem(name): Removes item by name
// calculateTotal(): Returns sum of all item prices
// applyDiscount(percent): Applies discount to total
// listItems(): Returns array of just item names

{
    // Create an empty cart
    let cart = [];

    // Add an item to the cart
    function addItem(name, price) {
        cart.push({ name, price });
    }

    // Remove an item by its name
    function removeItem(name) {
        cart = cart.filter(item => item.name !== name);
    }

    // Calculate the total price
    function calculateTotal() {
        return cart.reduce((total, item) => total + item.price, 0);
    }

    // Apply a discount and return the discounted total
    function applyDiscount(percent) {
        const total = calculateTotal();
        return  (total * (percent / 100));
    }

    // Return an array of item names
    function listItems() {
        return cart.map(item => item.name);
    }

    // Example Usage
    addItem("Laptop", 1000);
    addItem("Mouse", 50);
    addItem("Keyboard", 100);

    console.log(listItems());          
    console.log(calculateTotal());    
    console.log(applyDiscount(10));    
    removeItem("Mouse");
    console.log(listItems());          
    console.log(calculateTotal());    

}