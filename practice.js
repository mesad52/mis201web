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