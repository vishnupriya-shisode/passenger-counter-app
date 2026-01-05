let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let count = 0


function increment() {
    count += 1
    countEL.innerText = count

}


function save() {
    let countStr = count + " - "
    saveEL.textContent += countStr
    countEL.innerText = 0
    count = 0 
    console.log(count)
}

save()

