// //document.getElementById("count-el").innerText = 5
// let myAge = 25
// console.log(myAge)\
// let myAge = 25
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)
// let bonusPoints = 50

// bonusPoints = bonusPoints + 20
// console.log(bonusPoints)

// let count = 5
// console.log(count)
// function increment() {
//     console.log("The button was clicked")
// }


//  function myLogger() {
//     console.log(42)
//  }

//  myLogger()
//let variable are blocked scoped bevause they are defined within a function
// function myBook() {
//     let message = "Hello World"
//     console.log(message)
// }

//functiondd
// let lap1 = 34
// let lap2 = 33   
// let lap3 = 36

// function totalLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// totalLapTime()

let lapsCompleted = 0 

function increment() {
    lapsCompleted = lapsCompleted + 1
    
}
increment()
increment()
increment()

console.log(lapsCompleted)