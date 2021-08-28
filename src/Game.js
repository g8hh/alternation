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
window.setInterval(function(){
    numberIncrease(gain.div(100))
}, 10);
