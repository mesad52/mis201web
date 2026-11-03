console.log("Hello, JavaScript!");
console.log(3+7)
console.log("siup")
alert("Welcome to MIS201!");
alert("New message, click me!");

let courseName = "Internet TEchnologies and Programming";
console.log("Course:", courseName);

let userName = prompt("What is your name?");
if (userName !== null && userName.trim() !== "") {
    let continueProcess = confirm(
    "Hello, " + userName + "! Do you want to continue?"
    );
    if (continueProcess) {
    alert("Welcome to the application!");
    } else {
    alert("Operation cancelled.");
    }
    } else {
    alert("No name was provided.");
}

let studentName = "Alice";
let age = 21;
const university = "GTU";
console.log(studentName);
console.log(age);
console.log(university);
age = 22; // Allowed
// university = "MIT"; // Error

let value = 100;
console.log(typeof value); // number
value = "Hello";
console.log(typeof value); // string
value = true;
console.log(typeof value); // boolean

let price = 150;
let quantity = 3;
let total = price * quantity;
console.log("Total Price:", total); // 450

console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(20 > 15); // true
console.log(5 !== "5"); // true

let ages = 20;
let hasStudentID = true;
console.log(!ages >= 18 && hasStudentID); // false
console.log(ages < 18 || hasStudentID); // true
    
let day = 2;
switch (day) {
 case 1:
 console.log("Monday");
 break;
 case 2:
 console.log("Tuesday");
 break;
 case 3:
 console.log("Wednesday");
 break;
 default:
 console.log("Other day");
} 


