let number = 10
let gain = 0
let producerCosts = [10]
let producerIncreases = [1]
let producerProductions = [0]

function numberIncrease(i) {
    number += i
    updateHTML()
}
function buyProducer(x){
    let i = x-1
    if (number >= producerCosts[i]){
        number -= producerCosts[i]
        producerCosts[i] *= 1.08
        producerProductions[i] += producerIncreases[i]
        gain += producerIncreases[i]
        updateHTML()
    }
}
window.setInterval(function(){
    numberIncrease(gain)
}, 1000);
