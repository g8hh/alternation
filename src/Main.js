function numberIncrease(i) {
    data.halfPoints = data.halfPoints.plus(i)
    updateHTML()
}
function mainLoop(){
    calculateProductions()
    data.halfPointGain = data.destabProductions[0]
    numberIncrease(data.halfPointGain.div(100))
    produceDestabs()
    upgradeEffects()
    canHalfJump()
}
function switchTab(i){
    data.currentTab = i
    updateHTML()
}
window.setInterval(function(){
    mainLoop()
}, 10);
