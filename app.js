// Assignment of Chapter 21-25
// Task 1
var fname = prompt("Enter Your First Name: ");
var lname = prompt("Enter Your Last Name: ");
var fullName = fname + " " + lname;
document.write("Welcome " + fullName + "<br>");
// Task 2
var favoritePhone = prompt("Enter Your Favorite Phone's Model: ");
document.write("My favorite phone is: " + favoritePhone + "<br>");
document.write("Length of string: " + favoritePhone.length + "<br>");
// Task 3
var word = "Pakistani";
var character = "n";
document.write("String: " + word + "<br>");
document.write("Index of '" + character + "': " + word.indexOf(character) + "<br>");
// Task 4
var word = "Hello World";
var character = "l";
document.write("String: " + word + "<br>");
document.write("Last index of '" + character + "': " + word.lastIndexOf(character) + "<br>");
// Task 5
var word = "Pakistani";
var index = "3";
document.write("String: " + word + "<br>");
document.write("Character at index " + index + ": " + word.charAt(index) + "<br>");
// Task 6
var fname = prompt("Enter Your First Name: ");
var lname = prompt("Enter Your Last Name: ");
var fullName = fname.concat(" ", lname);
document.write("Welcome " + fullName + "<br>");
// Task 7
var city = "Hyderabad";
var wordToReplace = "Hyder";
var replacingWord = "Islam";
document.write("City: " + city + "<br>");
document.write("After replacement: " + city.replace(wordToReplace, replacingWord) + "<br>");
// Task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var wordToReplace = /and/g;
var replacingWord = "&";
document.write("Message: " + message + "<br>");
document.write("After replacement: " + message.replace(wordToReplace, replacingWord) + "<br>");
// Task 9
var toconvert = "472";
document.write("Value: " + toconvert + "<br>");
document.write("Type: " + typeof(toconvert) + "<br>");
var converted = +toconvert;
document.write("Value: " + converted + "<br>");
document.write("Type: " + typeof(converted) + "<br>");
// Task 10
var word = prompt("Enter a phrase: ");
document.write("User input: " + word + "<br>");
document.write("Upper case: " + word.toUpperCase() + "<br>");
// Task 11
var sentence = prompt("Enter a phrase: ");
document.write("User input: " + sentence + "<br>");
sentence = sentence.toLowerCase().split(" ")
for(var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
}
sentence = sentence.join(" ");
document.write("Title case: " + sentence + "<br>");
// Task 12
var num = 35.36;
var str_num = num + "";
str_num = str_num.split(".").join("");
document.write("Number: " + num + "<br>");
document.write("Result: " + str_num + "<br>");
// Task 13
var username = prompt("Enter your name: ");
var invalid = ["@", ".", ",", "!"];
for (var i = 0; i < username.length; i++) {
    for(var j = 0; j < invalid.length; j++) {
        if (invalid[j] === username[i]) {
            alert("Please enter a valid username");
        }
    }
}
// Task 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
for (var i = 0; i < A.length; i++) {
    if (search === A[i]) {
        document.write(search + " is <strong>available</strong> at index " + i + " in our bakery<br>");
        break;
    }
    else if (i === A.length - 1) {
        document.write("We are sorry." + search + " is <strong>not available</strong> in our bakery<br>");
    }
}
// Task 15
var password = prompt("Enter password: ");
document.write("Entered password: " + password + "<br>");
var regex = /^[a-z0-9]+$/i;
var isAlNum = regex.test(password);
regex = /^[0-9]$/;
var isNum = regex.test(password[0]);
if  (!isAlNum) {
    document.write("Password should only contain alphabets and numbers<br>");
    document.write("Please enter a valid password<br>");
}
else if (isNum) {
    document.write("Password can not begin with a number<br>");
    document.write("Please enter a valid password<br>");
}
else if (password.length < 6) {
    document.write("Password should be atleast 6 characters long<br>");
    document.write("Please enter a valid password<br>");
}
// Task 16
var university = "University of Karachi";
university = university.split("");
university = university.join("<br>");
document.write(university + "<br>");
// Task 17
var input = prompt("Enter a phrase: ");
document.write("User input: " + input + "<br>");
document.write("Last character of input: " + input.charAt(input.length - 1) +"<br>");
// Task 18
var text = "The quick brown fox jumps over the lazy dog";
var word = "the";
var regex = /the/gi;
var countNum = text.match(regex).length;
document.write("Text: " + text + "<br>");
document.write("There are " + countNum + " occurence(s) of word '" + word + "'<br>");

// Assignments of Chapter 21-25
// Task 1
var num = +prompt("Enter positive integer: ");
if (!(num >= 0)) {
    alert("Enter Positive integer");
}
else {
    document.write("number: " + num + "<br>");
    document.write("round off value: " + Math.floor(num) + "<br>");
    document.write("floor value: " + Math.round(num) + "<br>");
    document.write("ceil value: " + Math.ceil(num) + "<br>");
}
// Task 2
var num = +prompt("Enter negative integer: ");
if (num > 0) {
    alert("Enter Negative integer");
}
else {
    document.write("number: " + num + "<br>");
    document.write("round off value: " + Math.floor(num) + "<br>");
    document.write("floor value: " + Math.round(num) + "<br>");
    document.write("ceil value: " + Math.ceil(num) + "<br>");
}
// Task 3
var num = +prompt("Enter number: ");
document.write("The absolute value of " + num + " is " + Math.abs(num) + "<br>");
// Task 4
var dice = Math.floor( Math.random() * 6 ) + 1;
document.write("random dice value: " + dice + "<br>");
// Task 5
var coin = Math.floor( Math.random() * 2 ) + 1;
var side;
if (coin === 1) {
    side = "Tails";
}
else {
    side = "Heads";
}
document.write(coin + "<br>");
document.write("random coin value: " + side + "<br>");
// Task 6
var num = Math.floor( Math.random() * 100 ) + 1;
document.write("random number between 1 and 100: " + num + "<br>");
// Task 7
var weight = prompt("Enter your weight in kilograms");
var oWeight = "";
for (var i = 0; i < weight.length; i++) {
    if (!isNaN(weight[i]) || weight[i] === ".") {
        oWeight += weight[i];
    }
}
document.write("The weight of user is " + oWeight + " kilograms<br>");
// Task 8
var num = Math.floor( Math.random() * 10 ) + 1;
var guess = +prompt("Enter a number between 1 and 10");
if (guess === num) {
    alert("Congratulations!");
}
else {
    alert("Try again!");
}

//  Assignment of Chapter 26-30
// Task 1 :

var userNumber = +prompt("Enter your positive number");
var round = Math.round(userNumber);
var floor = Math.floor(userNumber);
var ceil = Math.ceil(userNumber);
if (userNumber > 0) {
    document.write("Number "+ userNumber + "<br>" + "round of value " + round + "<br>"+ "floor value of the number "+ floor + "<br>" +"ceil value of the number "+ ceil);
} else{
alert("Invalid number ")

}


//  Task 2 :
var userNumber = +prompt("Enter your positive number");
var round = Math.round(userNumber);
var floor = Math.floor(userNumber);
var ceil = Math.ceil(userNumber);
if (userNumber < 0) {
    document.write("Number "+ userNumber + "<br>" + "round of value " + round + "<br>"+ "floor value of the number "+ floor + "<br>" +"ceil value of the number "+ ceil);
} else{
alert("Invalid number ")

}

//Task 3 :
var num1 = -4 ;
var num2 = 5;
var absNum1 = Math.abs(num1);
var absNum2 = Math.abs(num2);
document.write("The absolute value of -4 is " + absNum1 + " The absolute value of 5 is " + absNum2);

// Task 4:
var randomNumber = (Math.random()*6)  ;
var ceilNum = Math.ceil(randomNumber);
var randomNumber1 = (Math.random()*6)  ;
var ceilNum1 = Math.ceil(randomNumber1);
document.write("Random device value " + ceilNum + "<br> " +" Random device value " + ceilNum1);

// Task 5 :
var head = (Math.random() * 2) + 1;
var tails = (Math.random()* 2 )+ 1;
var headfloor = Math.floor(head);
var tailsfloor = Math.floor(tails);
document.write(headfloor + " Random coin values Head "+ "<br>");
document.write(tailsfloor + " Random coin values Tails ");


// Task 6 :
var min = 1;
var max = 100;
var x= Math.floor(Math.random() *(max-min+1)+min) ;
document.write("random number between 1 and 100 = "+ x);


// Task 7 :
 var weight = prompt("Enter your weight");
 var convert = parseInt(weight);
 document.write("The weight of user is " + convert);

// Task 8 :
var secretNum = +prompt("Enter the secret number between 1 to 10");
if (secretNum === 8) {
alert("Congrautalion your Task is right");
} else {
    alert( "Try again ");
} 

// Assignment of Chapters 31-34
// Task 1
var date = new Date();
document.write(date + "<br>");
// Task 2
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();
var current_month = months[date.getMonth()];
document.write("Current month: " + current_month + "<br>");
// Task 3
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var date = new Date();
var current_day = days[date.getDay()];
document.write("Today is " + current_day + "<br>");
// Task 4
var date = new Date();
var current_day = date.getDay();
if (current_day === 0 || current_day === 6) {
    document.write("It's Fun day<br>");
}
// Task 5
var date = new Date();
var day = date.getDate();
if (day < 15) {
    document.write("First fifteen days of the month<br>");
}
else {
    document.write("Last days of the month<br>");
}
// Task 6
var date = new Date();
var miliseconds = date.getTime();
var minutes = miliseconds / 1000 / 60;
document.write("Current Date: " + date + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + miliseconds + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + minutes + "<br>");
// Task 7
var date = new Date();
var hours = date.getHours();
if (hours < 12) {
    document.write("It's AM<br>");
}
else {
    document.write("It's PM<br>");
}
// Task 8
var date = new Date("December 31, 2020");
document.write("Later date: " + date + "<br>");
// Task 9
var ramadan_date = new Date("June 18, 2015");
var ramadan_date = ramadan_date.getTime() / 1000 / 60 / 60 / 24;
var date = new Date();
var date_now = date.getTime() / 1000 / 60 / 60 / 24;
var passed_days = Math.floor(date_now - ramadan_date);
document.write(passed_days + " days have passed since 1st Ramadan, 2015<br>");
// Task 10
var reference_date = new Date("December 05, 2015 22:50:16");
var date = new Date("January 01, 2015");
var reference_seconds = reference_date.getTime() / 1000 / 60;
var date_seconds = date.getTime() / 1000 / 60;
var total_time = Math.ceil(reference_seconds - date_seconds);
document.write("On reference date " + reference_date + ",<br>");
document.write(total_time + " seconds had passed since beginning of 2015<br>");
// Task 11
var date = new Date();
var hour_ahead = new Date();
hour_ahead.setHours(hour_ahead.getHours() - 1);
document.write("current date: " + date + "<br>");
document.write("1 hour ago, it was " + hour_ahead);
// Task 12
var date = new Date();
var date100 = new Date();
date100.setFullYear(date100.getFullYear() - 1);
alert("current date: " + date);
alert("100 years back, it was " + date100);
document.write("current date: " + date + "<br>");
document.write("100 years back, it was " + date100 + "<br>");
// Task 13
var age = +prompt("Enter your age: ");
var date = new Date();
var dob = date.getFullYear() - age;
document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + dob + "<br>");
// Task 14
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var name = prompt("Enter Your Name: ");
var date = new Date();
var month = months[date.getMonth()];
var units = Math.random() * 1000;
var charges = Math.random() * 20;
var bill = units * charges;
var late = bill * 0.05;
var late_bill = bill + late;
document.write("<h1>K-Electric Bill</h1>");
document.write("Customer Name: " + name + "<br>");
document.write("Month: " + month + "<br>");
document.write("Number of units: " + units.toFixed(2) + "<br>");
document.write("Charges per unit: " + charges.toFixed(2) + "<br>");
document.write("Net Amount Payable (within Due Date): " + bill.toFixed(2) + "<br>");
document.write("Late payment surcharge: " + late.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + late_bill.toFixed(2) + "<br>");

// Assignments of Chapters 35-38
// Task 1
function dateTime () {
    var date = new Date();
    document.write(date + "<br>");
}
dateTime();
// Task 2
function nameGreeter (fname, lname) {
    document.write("Welcome " + fname + " " + lname + "<br>");
}
nameGreeter("Syed Talha", "Askari");
// Task 3
function add (num1, num2) {
    return num1 + num2;
}
var num1 = +prompt("Enter First Number: ");
var num2 = +prompt("Enter Second Number: ");
var sum = add(num1, num2);
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");
// Task 4
function calc (num1, num2, op) {
    switch(op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            var div = num1 / num2;
            return div.toFixed(2);
        case "%":
            return num1 % num2;
        default:
            return 0;
    }
}
alert("Options:\n +. Addition\n -. Subtraction\n *. Multiplication\n /. Division\n %. Remainder");
var num1 = +prompt("Enter First Number: ");
var num2 = +prompt("Enter Second Number: ");
var op = prompt("Enter Operator: ");
var ans = calc(num1, num2, op);
if (ans === 0) {
    document.write("Invalid<br>");
}
else {
    document.write(num1 + " " + op + " " + num2 + " " + " = " + ans + "<br>");
}
// Task 5
function square(num) {
    return num * num;
}
var num = +prompt("Enter Number: ");
var sqr = square(num);
document.write("Square of " + num + " is " + sqr + "<br>");
// Task 6
function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else if (n < 0) {
        return -1;
    }
    else  {
        return n * fact(n - 1);
    }
}
var n = +prompt("Enter Number: ");
var f = fact(n);
if (f === -1) {
    document.write("Negative Number Factorials are not possible<br>");
}
else {
    document.write("Factorial of " + n + " is " + f + "<br>");
}
// Task 7
function count(start, end) {
    for (start; start <= end; start++) {
        document.write(start + "<br>");
    }
}
var start = +prompt("Enter starting number: ");
var end = +prompt("Enter ending number: ");
count(start, end);
// Task 8
function calculateSquare(num) {
    return num * num;
}
function calculateHypotenuse(base, perpendicular) {
    return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular)).toFixed(2);
}
var base = +prompt("Enter Base: ");
var perpendicular = +prompt("Enter Perpendicular: ");
document.write("Hypotenuse of Base: " + base + " and " + perpendicular + " is " + calculateHypotenuse(base, perpendicular) + "<br>");
// Task 9
function area(width, height) {
    return width * height;
}
var height = +prompt("Enter height: ");
var A = area(43, height);
document.write("Area of a triangle of width = 43 and height = " + height + " is " + A + "<br>");
// Task 10
function palindrome(str) {
    var revStr = str.split("").reverse().join("");
    if (str === revStr) {
        document.write("Given string \"" + str + "\" is a palindrome<br>");
    }
    else {
        document.write("Given string \"" + str + "\" is not a palindrome<br>");
    }
}
var str = prompt("Enter a phrase: ");
palindrome(str);
// Task 11
function title(str) {
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
    }
    str = str.join(" ");
    return str;
}
var str = prompt("Enter a phrase: ");
var title_str = title(str);
document.write("EXAMPLE STRING : '" + str + "'<br>");
document.write("EXPECTED OUTPUT : '" + title_str + "'<br>");
// Task 12
function wordCount(str) {
    str = str.split(" ");
    var lStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i].length > lStr.length) {
            lStr = str[i];
        }
    }
    return lStr;
}
var str = prompt("Enter a phrase: ");
var word = wordCount(str);
document.write("EXAMPLE STRING : '" + str + "'<br>");
document.write("EXPECTED OUTPUT : '" + word + "'<br>");
// Task 13
function letterCount(str, letter) {
    var count = 0;
    count = str.match(new RegExp(letter, "g")).length;
    return count;
}
var str = prompt("Enter a phrase: ");
var letter = prompt("Enter a letter to count: ");
var count = letterCount(str, letter);
document.write("Given string: " + str + "<br>");
document.write("Letter: " + letter + "<br>");
document.write("Total Occurences: " + count + "<br>");
// Task 14
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference.toFixed(2) + "<br>");
}
function calcArea(radius) {
    var area = Math.PI * radius * radius;
    document.write("The area is " + area.toFixed(2) + "<br>");
}
var radius = +prompt("Enter radius of circle: ");
calcCircumference(radius);
calcArea(radius);