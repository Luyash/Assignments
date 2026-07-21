function calculate(){

let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let age = Number(document.getElementById("age").value);

let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);

let itemPrice = Number(document.getElementById("price").value);
let qty = Number(document.getElementById("qty").value);

let city = document.getElementById("city").value;

let message = "JavaScript";

let marks = Number(document.getElementById("marks").value);

let radius = Number(document.getElementById("radius").value);

let a = Number(document.getElementById("a").value);
let b = Number(document.getElementById("b").value);

let email = document.getElementById("email").value;

let seconds = Number(document.getElementById("seconds").value);

let result = "";

// 1
result += "Hello, " + firstName + " " + lastName + "!<br>";

// 2
result += "I am " + age + " years old.<br><br>";

// 3
result += "Sum: " + (num1 + num2) + "<br>";
result += "Difference: " + (num1 - num2) + "<br>";
result += "Product: " + (num1 * num2) + "<br>";
result += "Quotient: " + (num1 / num2) + "<br><br>";

// 4
let total = itemPrice * qty;
result += "Total = " + total + "<br><br>";

// 5
result += "Original city: " + city + "<br>";
result += "Uppercase: " + city.toUpperCase() + "<br>";
result += "Lowercase: " + city.toLowerCase() + "<br><br>";

// 6
result += "Length of 'JavaScript': " + message.length + "<br><br>";

// 7
if(marks > 50){
result += "Marks greater than 50<br>";
}
else if(marks == 50){
result += "Marks equal to 50<br>";
}
else{
result += "Marks less than 50<br>";
}

result += "<br>";

// 8
let area = Math.PI * radius * radius;
result += "Area of Circle: " + area.toFixed(2) + "<br><br>";

// 9 Swap
let beforeA = a;
let beforeB = b;

let temp = a;
a = b;
b = temp;

result += "Before Swap: A=" + beforeA + " B=" + beforeB + "<br>";
result += "After Swap: A=" + a + " B=" + b + "<br><br>";

// 10 Capitalize name
let fullName = "john doe";
let words = fullName.split(" ");

let capitalized = words.map(word =>
word.charAt(0).toUpperCase() + word.slice(1)
).join(" ");

result += "Capitalized Name: " + capitalized + "<br><br>";

// 11 Seconds conversion
let minutes = Math.floor(seconds / 60);
let remSeconds = seconds % 60;

result += minutes + " minutes " + remSeconds + " seconds<br><br>";

// 12 Email
result += "First character: " + email.charAt(0) + "<br>";
result += "Last character: " + email.charAt(email.length - 1) + "<br>";
result += "Contains @ : " + email.includes("@") + "<br>";

document.getElementById("result").innerHTML = result;

}