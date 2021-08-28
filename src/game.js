let number = new Decimal(10)
let gain = new Decimal(0)
let producerCosts = [new Decimal(10), new Decimal(150), new Decimal(500)]
let producerIncreases = [new Decimal(1), new Decimal(10), new Decimal(50)]
let producerProductions = [new Decimal(0), new Decimal(0), new Decimal(0)]

function numberIncrease(i) {
    number = number.plus(i)
    updateHTML()
}
function buyProducer(x){
    let i = x-1
    if (number.gte(producerCosts[i])){
        number = number.sub(producerCosts[i])
        producerCosts[i] = producerCosts[i].times(1.05)
        producerProductions[i] = producerProductions[i].plus(producerIncreases[i])
        gain = gain.plus(producerIncreases[i])
        updateHTML()
    }
}
window.setInterval(function(){
    numberIncrease(gain.div(100))
}, 10);
