function numberIncrease(i) {
    data.halfPoints = data.halfPoints.plus(i)
    updateHTML()
}
function buyDestab(x){
    let i = new Decimal(x-1)
    if (data.halfPoints.gte(data.destabCosts[i])){
        data.halfPoints = data.halfPoints.sub(data.destabCosts[i])
        data.destabCosts[i] = data.destabCosts[i].times(x * 1.2)
        data.destabProductions[i] = data.destabProductions[i].plus(data.destabIncreases[i])
        updateHTML()
    }
}
function produceDestabs(){
    data.destabProductions[0] = data.destabProductions[0].plus(data.destabProductions[1])
    data.destabProductions[1] = data.destabProductions[1].plus(data.destabProductions[2])
    data.destabProductions[2] = data.destabProductions[2].plus(data.destabProductions[3])
    //for (let a = 1; a < data.destabProductions.length; a++) {
    //}
}
function switchTab(i){
    data.currentTab = i
    updateHTML()
}
window.setInterval(function(){
    if (loaded){
        data.halfPointGain = data.destabProductions[0]
        numberIncrease(data.halfPointGain.div(100))
        produceDestabs()
    }
}, 10);
