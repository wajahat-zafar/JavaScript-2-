//CHAP21-25
//part1

var input1 = prompt("Enter your first name:")
var input2 = prompt("Enter your last name:")
alert("Hello" + " " + input1 + " " + input2 + "!")

//part2

var phone  = prompt("Enter your favourite mobile phone model?")

var len = phone.length
alert("The length of the string is:" + " " + len)

//part3

var string ="Pakistan"
var index = string.indexOf("n")
document.write(index)


//part4

var string1 = "Hello World"
var index1 = string1.lastIndexOf("l")
document.write(index1)

//part5

var word = "Pakistani"
var thirdIndex = word.charAt(3)
document.write(thirdIndex)

//part6
var firstName = prompt("Enter your first name:")
var lastName = prompt("Enter your last name:")
var merge = firstName.concat(lastName)
document.write(merge)

//part7
var word2 = "Hyderabad"
var replace = word2.replace("Hyder","Islam")
document.write(replace)

//part8

var message = "Ali and Sami are best friends. They play cricket and football together."

var replace1 = message.replace("and","&")
document.write(replace1)

//part9

var value = "472"
var convert = Number(value)
document.write(convert)


//part10

var character  = prompt("Enter your character")
var upper = character.toUpperCase()
document.write(upper)

//part11

var char = "javascript"
var titleConvert = char.slice(0,1)
var titleConvert2 = char.slice(1)
var Upper= titleConvert.toUpperCase()
var Lower = titleConvert2.toLowerCase()
var conversion = Upper+ Lower
document.write(conversion)

//part12

var num = 35.36

var strNumber = num.toString()
var strNumber = strNumber.split(".").join('')
document.write(strNumber)


//part13

var username = prompt("Enter the username:")
var invalid = [",",".","[","]","/","?","@"]
for (var i = 0;i<=username.length;i++){
    if (username[i] ===invalid[i]){
        alert("Please Enter the valid username!")
    }
}

//part14

var A = ['cake','applepie' , 'cookie','chips','patties']
var search = prompt("Welcome to MsBakery! What do you want to order?")
var search = search.toLowerCase()

for (i = 0 ; i<=A.length-1;i++){
    if (search == A[i]){
        alert("The item" +"  "+search +"  "+ "is available at index" + "  " +i +"  " +"in our bakery")  
    }
    else if (search != A[i]){
        alert("The item" +"  "+search +"  "+ "is not available in our bakery")

    }

}


//part15
var pass = prompt("Enter your password!")
condition1=false
condition2=false
condition3=false
for (i = 0;i<=pass.length;i++){
    if (pass.charCodeAt(0)>=48 && pass.charCodeAt(0)<=57){
        condition1 = true
        alert("Password should not starts with a number")
        break
    }
}
for (i = 0 ;i<=pass.length;i++){

     if (pass.charCodeAt(i)>=65 && pass.charCodeAt(i)<=90){
        condition2 = true
    }
    else if(pass.charCodeAt(i)>=97 && pass.charCodeAt(i)<=122){
        condition3 = true
    }
    else if(!condition2 || !condition3 ){
        alert("Password Must include uppercase and lowercase characters")
        break
    }
    else if(condition2 && condition3 ){
        alert("Correct!Proceed to the next step")
        break
    }
    else if(pass.length<6){
        alert("Your password length is too small")
    }
    if(pass.length<6){
        alert("password length is too small")
        break
    }
    
}  



//part16

var university = "University of Karachi";

var splitting = university.split("").join("<br>")
document.write(splitting)

//part17


var userInp = prompt("Enter your word")
var lastchar = userInp[userInp.length-1]
document.write(lastchar)
//part18

var str = "The quick brown fox jumps over the lazy dog"

var count = str.count("the")

document.write(count)
var text = "The quick brown fox jumps over the lazy dog"
var word = /the/gi
var count = text.match(word).length
document.write("Occurences:" + " " + count)

// Assignments of Chapter 21-25
//CHAP26-30

//part1

var number = prompt("Enter your number!")
document.write(number + "<br>")
var round = Math.round(number)
document.write(round + "<br>")
var floor = Math.floor(number)
document.write(floor + "<br>")
var ceil = Math.ceil(number)
document.write(ceil + "<br>")


//part2
var number1 = prompt("Enter your negative number!")
document.write(number1 + "<br>")
var round = Math.round(number1)
document.write(round + "<br>")
var floor = Math.floor(number1)
document.write(floor + "<br>")
var ceil = Math.ceil(number1)
document.write(ceil+ "<br>")

//part3

var a = -5
document.write(Math.abs(a))


//part4

var random = Math.random()*8
var round = Math.round(random)
alert("The random value of dice is:" +" "  + round)


//part5

var random1 = Math.random()*2
var round1 = Math.round(random1)

if(round1 == 1){
    alert("1 random coin value head")
}
else if(round1 ==2){
    alert("2 random coin value tails")
}

//part6

for (i= 1;i<=100;i++){
    var rangeRandom = Math.random(i)*100
    var round3 = Math.round(rangeRandom)
    document.write("random numbers between 1 and 100:" + " " + round3)
    break
}

//part7

var weight = prompt("Enter your weight in kilograms!")

var con = parseInt(weight)
alert(con)

//part8

var secretNumber = Math.random()*10;
var roundSecret = Math.round(secretNumber);
var inputNumber = prompt("Input the number ranging between 1 to 10.")
if (inputNumber === roundSecret){
    alert("Congratulations")
}
else if(inputNumber>10){
    alert("You can only choose numbers between 1 to 10")
}

else{
    alert("TryAgain!")
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

//CHAP31-34

//part1
var rightNow = new Date();
document.write(rightNow)

//part2
var months = ['jan','feb','march','apr','may','june','july','august','sept','oct','nov','dec']
var newDate = new Date()
var currentMonth = newDate.getMonth()
var monthWords = months[currentMonth]
alert(monthWords)

//part3

var date = new Date();
var a = date.toString()
var c = a.slice(0,3)
document.write(c)

//part4
var dateToday = new Date();
var str = dateToday.toString();
var check = str.slice(0,3)
if (check ==="sat" || check ==="sun"){
    alert("Its a funday")
}
else{
    alert("Not a funday")
}

//part5
var day = new Date();
var daysOfMonth = day.getDay()
if (daysOfMonth< 16){
    alert("First 15  days of the months")
}

else{
    alert("Last days of the month")
}

//part6
var today = new Date();
alert("Current Date:" + " " + today)
var todayTime = today.getTime();
alert("Time in Miliseconds:" + " "+ todayTime)
var minutes = todayTime/(1000*60)

alert("Time in Minutes from jan1 1970: " + " " +  minutes)


//part7
var d = new Date();
var Hours = d.getHours()

if(Hours < 12){
    alert("Before Noon AM")
}

else{
    alert("PM")
}

//part8
var laterDate = new Date("June 30,2020")
alert("LaterDate:" + " " + laterDate)


//part9

var todayDate = new Date()
var RDate = new Date("June 18,2015")
var miliseconds = todayDate.getTime()
var miliseconds2 = RDate.getTime()
var difference = miliseconds-miliseconds2
var daysTillRamadan =Math.floor(difference/(1000*60*60*24)) 
alert("Days passed till 2015 ramadan are" +" " + daysTillRamadan )

//part10
var refDate = new Date("December 05, 2015 22:50:16")
var prevDate = new Date("January 01, 2015")
var refTime = refDate.getTime()
var prevTime = prevDate.getTime()
var diffInmili = refDate-prevDate
var second = Math.ceil(diffInmili/(1000*60))
alert("The Seconds passed since beginning of 2015 are" + " " + second)


//part11

var currentDate = new Date();
alert(currentDate)
var hourAgo=new Date()
var hours = hourAgo.getHours()
hourAgo.setHours(hours-1)
alert("1 hour ago it was" + " " +hourAgo)

//part12

var dateObj = new Date()
var resDate = new Date()
var getYears = resDate.getFullYear()
resDate.setFullYear(getYears-100)
alert("100 years back" + " " + resDate)


//part13
var age  = prompt("Enter your age!")
var currentYear = new Date()
var getCurrentYear = currentYear.getFullYear()
var pastYear = getCurrentYear-age
alert("Your birth date was:" +" " + pastYear)


//part14
var customerName = prompt("Enter your name:")
var months = ['jan','feb','march','apr','may','june','july','august','sept','oct','nov','dec']
var bDate = new Date()
var Months = bDate.getMonth()
var billMonth = months[Months]
var numberOfUnit = 800
var unitperCharges = 50
var amountPayable = numberOfUnit*unitperCharges
var dueDate = new Date()
var getDueDate = dueDate.getDate()
dueDate.setDate(getDueDate+10)
var lateSurcharge = 1000
if (bDate > dueDate){
    amountPayable2 = amountPayable+lateSurcharge
    document.write("The Customer name is" + " " + customerName + "<br>")
    document.write("Current Billing Month is" + " " + billMonth + "<br>")
    document.write("Number of unit used this month are" + " "+numberOfUnit + "units"+ "<br>")
    document.write("The charges per unit are" + " " + unitperCharges + "Rs"+ "<br>")
    document.write("Late payment charges are" + " "+lateSurcharge + "RS"+ "<br>")
    document.write("Gross Bill Payable after" + " " + dueDate + " " + amountPayable2)
}
else{
    document.write("The Customer name is" + " " + customerName + "<br>")
    document.write("Current Billing Month is" + " " + billMonth + "<br>")
    document.write("Number of unit used this month are" + " "+numberOfUnit + "units"+ "<br>")
    document.write("The charges per unit are" + " " + unitperCharges + "Rs"+ "<br>")
    document.write("Net Payable Amount with in due date is" + " " + amountPayable+"RS"+ "<br>")
    document.write("Late payment charges are" + " "+lateSurcharge + "RS"+ "<br>")

}

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