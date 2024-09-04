// Write your code here

// let bulb1 = document.querySelector("#lightbulb1")
// let bulb2 = document.querySelector("#lightbulb2")
// let bulb3 = document.querySelector("#lightbulb3")
let bulb = document.querySelectorAll(".lightbulb")
let output = document.querySelector(".subtitle")

let count = 0;

for(let i = 0; bulb.length; i++) {
    bulb[i].addEventListener("click", function() {
        count++
        bulb[i].classList.toggle("active")
        if (count == 1) {
            output.innerHTML = `You've clicked the lights ${count} time`
        } else {
            output.innerHTML = `You've clicked the lights ${count} times`
        }
    })
}

// bulb1.addEventListener("click", function() {
//     count++
//     bulb1.classList.toggle("active")
//     if (count == 1) {
//         output.innerHTML = `You've clicked the lights ${count} time`
//     } else {
//         output.innerHTML = `You've clicked the lights ${count} times`
//     }
// })

// bulb2.addEventListener("click", function() {
//     count++
//     bulb2.classList.toggle("active")
//     if (count == 1) {
//         output.innerHTML = `You've clicked the lights ${count} time`
//     } else {
//         output.innerHTML = `You've clicked the lights ${count} times`
//     }
// })

// bulb3.addEventListener("click", function() {
//     count++
//     bulb3.classList.toggle("active")
//     if (count == 1) {
//         output.innerHTML = `You've clicked the lights ${count} time`
//     } else {
//         output.innerHTML = `You've clicked the lights ${count} times`
//     }
// })

// bulb1.addEventListener("mouseover", function() {
//     count++
//     bulb1.classList.toggle("active")
//     if (count == 1) {
//         output.innerHTML = `You've clicked the lights ${count} time`
//     } else {
//         output.innerHTML = `You've clicked the lights ${count} times`
//     }
// })

// bulb1.addEventListener("mouseout", function() {
//     count++
//     bulb1.classList.toggle("active")
//     if (count == 1) {
//         output.innerHTML = `You've clicked the lights ${count} time`
//     } else {
//         output.innerHTML = `You've clicked the lights ${count} times`
//     }
// })

// bulb2.addEventListener("mouseover", function() {
//     count++
//     bulb2.classList.toggle("active")
//     if (count == 1) {
//         output.innerHTML = `You've clicked the lights ${count} time`
//     } else {
//         output.innerHTML = `You've clicked the lights ${count} times`
//     }
// })

// bulb2.addEventListener("mouseout", function() {
//     count++
//     bulb2.classList.toggle("active")
//     if (count == 1) {
//         output.innerHTML = `You've clicked the lights ${count} time`
//     } else {
//         output.innerHTML = `You've clicked the lights ${count} times`
//     }
// })

// bulb3.addEventListener("mouseover", function() {
//     count++
//     bulb3.classList.toggle("active")
//     if (count == 1) {
//         output.innerHTML = `You've clicked the lights ${count} time`
//     } else {
//         output.innerHTML = `You've clicked the lights ${count} times`
//     }
// })

// bulb3.addEventListener("mouseout", function() {
//     count++
//     bulb3.classList.toggle("active")
//     if (count == 1) {
//         output.innerHTML = `You've clicked the lights ${count} time`
//     } else {
//         output.innerHTML = `You've clicked the lights ${count} times`
//     }
// })