function numberIncrease(i) {
    number = number.plus(i)
    updateHTML()
}
function buyProducer(x){
    let i = x-1
    if (number.gte(increaserCosts[i])){
        number = number.sub(increaserCosts[i])
        increaserCosts[i] = increaserCosts[i].times(1.05)
        increaserProductions[i] = increaserProductions[i].plus(increaserIncreases[i])
        gain = gain.plus(increaserIncreases[i])
        updateHTML()
    }
}
function buyMulti(x){
    let i = x-1
    if (number.gte(multiCosts[i])){
        number = number.sub(multiCosts[i]).plus(10)
        multiBoosts[i] = multiBoosts[i].plus(multiIncreases[i])
        multiCosts[i] = multiCosts[i].times(2)
        increaserIncreases[i] = increaserIncreases[i].times(multiIncreases[i])
        increaserCosts = [new Decimal(10), new Decimal(150), new Decimal(500)]
        increaserProductions = [new Decimal(0), new Decimal(0), new Decimal(0)]
    }
}
function switchTab(i){
    currentTab = i
    updateHTML()
}
window.setInterval(function(){
    numberIncrease(gain.div(100))
}, 10);
