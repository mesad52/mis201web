let price = 100;
let quantity = 3;
let tax = .20;

console.log(price * quantity + (price * quantity * tax));

function calculateShipping(orderTotal) {
    if (orderTotal >= 500) {
        return 0;
    } else {
        return 50
    }
}

console.log(calculateShipping(300));
console.log(calculateShipping(600));    

const scores = [45, 80, 92, 30, 75];

let passedCount = 0;

for (i = 0; i < scores.length; i ++) {
    if (50 < scores[i]){
        console.log(passedCount++ +1);
        console.log(scores[i]);
    }
}

const statusText = document.getElementById("status");
statusText.textContent = "Online";
statusText.style.color = "green";



const gradeInput = document.getElementById("grade-input");
const checkBtn = document.getElementById("check-btn");
const resultText = document.getElementById("result");

checkBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const grade = Number(gradeInput.value);
    if (grade < 0 || grade > 100) {
        console.log("Invalid grade!");
    } else if (grade >= 50) {
        console.log("Passed!");
    } else {
        console.log("Failed!");
    }
});

const cart = [120, 40, 200, 80, 150];
const calc = document.getElementById("calc-btn")
const vip = document.getElementById("vip-output")

calc.addEventListener("click", (e) => {
    e.preventDefault()

    let sum = 0;

    for (i = 0; i < cart.length; i++) {
        if (cart[i] >= 100) {
            sum += cart[i];
        }
    }

    vip.textContent = "VIP Total: " + sum;
        
});

const temperatures = [18, 24, 15, 31, 22, 29];

let highest = temperatures[0];

for (i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > highest) {
        highest = temperatures[i];
    }
        
}

console.log(highest);


const bouquets = [
  { name: "White Rose", price: 250, inStock: true },
  { name: "Red Rose", price: 320, inStock: false },
  { name: "Pink Tulip", price: 180, inStock: true },
  { name: "Orchid", price: 450, inStock: true }
];

for (let i = 0; i < bouquets.length; i++) {
    if (bouquets[i].inStock === true && bouquets[i].price <=300) {
        console.log(bouquets[i].name);
    }
}

let scoreInput = document.getElementById("score-input");
let controlBtn = document.getElementById("ctrl-btn");
let gradeOutput = document.getElementById("grade-output");

controlBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const scoring = Number(scoreInput.value);
    if (scoring < 0 || scoring > 100) {
        gradeOutput.textContent = "Invalid Grade!"
        gradeOutput.style.color = "blue";
    } else if (scoring >= 50) {
        gradeOutput.textContent = "Passed!"
        gradeOutput.style.color = "green";
    } else {
        gradeOutput.textContent = "Failed!"
        gradeOutput.style.color = "red";
    }
});

const orders = [
  { id: 101, total: 150, delivered: true },
  { id: 102, total: 80, delivered: false },
  { id: 103, total: 220, delivered: true },
  { id: 104, total: 95, delivered: true }
];

let anything = 0;

for (let i = 0; i < orders.length; i++) {
    if (orders[i].delivered === true && orders[i].total >= 100) {
        anything += orders[i].total
    }
};

console.log(anything);
