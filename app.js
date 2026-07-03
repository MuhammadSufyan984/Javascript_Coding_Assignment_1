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
// Remove "cherry" 
// Replace "date" with "dragonfruit"
// Extract the middle 3 elements into a new array