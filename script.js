let saveG = document.getElementById("saveGuest")
let countG = document.getElementById("countGuest")
let count = 0

function increment() {
    count = count + 1
    countG.textContent = count
} 

 //save
function save() {
 let countGst = count +  "-"
 saveG.textContent += countGst
 countG.textContent = 0
 count = 0
 }
 