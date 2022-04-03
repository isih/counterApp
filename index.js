// document.getElementById("count").innerText = 5


let varrFirst = document.getElementById("count")
let count = 0

function Increment() {
    count = count + 1
    varrFirst.innerText = count
}

let varrSecond = document.getElementById("previous")
let saver = 0
function Save() {
    saver = count + " - "
    varrSecond.textContent += saver
    varrFirst.innerText = count - count
    count = 0
}



// 1. Create a variable, myAge, and set its value to your age

// 2. Log the myAge variable to the console