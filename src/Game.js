function numberIncrease(i) {
    data.number = data.number.plus(i)
    updateHTML()
}
function buyProducer(x){
    let i = new Decimal(x-1)
    if (data.number.gte(data.increaserCosts[i])){
        data.number = data.number.sub(data.increaserCosts[i])
        data.increaserCosts[i] = data.increaserCosts[i].times(1.05)
        data.increaserProductions[i] = data.increaserProductions[i].plus(data.increaserIncreases[i])
        data.gain = data.gain.plus(data.increaserIncreases[i])
        updateHTML()
    }
}
function buyMulti(x){
    let i = x-1
    if (data.number.gte(data.multiCosts[i])){
        data.number = data.number.sub(data.multiCosts[i]).plus(10)
        data.multiBoosts[i] = data.multiBoosts[i].plus(data.multiIncreases[i])
        data.multiCosts[i] = data.multiCosts[i].times(2)
        data.increaserIncreases[i] = data.increaserIncreases[i].times(data.multiIncreases[i])
        data.increaserCosts = [new Decimal(10), new Decimal(150), new Decimal(500)]
        data.increaserProductions = [new Decimal(0), new Decimal(0), new Decimal(0)]
    }
}
function switchTab(i){
    data.currentTab = i
    updateHTML()
}
window.setInterval(function(){
    if (loaded)
    numberIncrease(data.gain.div(100))
}, 10);
