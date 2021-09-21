function buyDestab(x){
    let i = new Decimal(x-1)
    if (data.halfPoints.gte(data.destabCosts[i])){
        data.halfPoints = data.halfPoints.sub(data.destabCosts[i])
        data.destabCosts[i] = data.destabCosts[i].times(x * 1.2)
        data.destabProductions[i] = data.destabProductions[i].plus(data.destabIncreases[i])
        data.destabAmounts[i] = data.destabAmounts[i].plus(1)
        updateHTML()
    }
}
function produceDestabs(){
    //production
    data.destabProductions[0] = data.destabProductions[0].plus(data.destabProductions[1])
    data.destabProductions[1] = data.destabProductions[1].plus(data.destabProductions[2])
    data.destabProductions[2] = data.destabProductions[2].plus(data.destabProductions[3])
    //amounts
    data.destabAmounts[0] = data.destabAmounts[0].plus(data.destabProductions[1])
    data.destabAmounts[1] = data.destabAmounts[1].plus(data.destabProductions[2])
    data.destabAmounts[2] = data.destabAmounts[2].plus(data.destabProductions[3])
    //for (let a = 1; a < data.destabProductions.length; a++) {
    //}
}
function calculateProductions(){
    for (let i=0; i<data.destabIncreases.length; i++){
        if (data.hasUpgrade[0]) data.destabIncreases[0] = new Decimal(1).times(2).times(data.upgradeEffects[0])
        if (data.hasUpgrade[i]) data.destabIncreases[i] = new Decimal(1).times(data.upgradeEffects[i])
        else data.destabIncreases[i] = new Decimal(1)
    }
    for(let i=0; i<data.destabProductions.length; i++){
        data.destabProductions[i] = data.destabAmounts[i].times(data.destabIncreases[i])
    }
}
function buyUpgrade(x){
    let i = new Decimal(x-1)
    if (data.halfPoints.gte(data.upgradeCosts[i]) && !data.hasUpgrade[i]){
        data.hasUpgrade[i] = true
        data.halfPoints = data.halfPoints.sub(data.upgradeCosts[i])
    }
    upgradeReset()
}
function upgradeEffects(){
    for (let i=0; i<4; i++){
        if (data.destabAmounts[3].gte(1)){
            data.upgradeEffects[i] = data.destabAmounts[3].log(1.1).plus(1.3)
        }
        else data.upgradeEffects[i] = new Decimal(1)
    }
}
function upgradeReset(){
    data.halfPoints = new Decimal(10)
    data.halfPointGain = new Decimal(0)
    data.destabCosts[0] = new Decimal(10)
    data.destabCosts[1] = new Decimal(300)
    data.destabCosts[2] = new Decimal(2e6)
    data.destabCosts[3] = new Decimal(1e10)
    for (let i = 0; i < data.destabProductions.length; i++) {
        data.destabProductions[i] = new Decimal(0)
        data.destabIncreases[i] = new Decimal(1)
        data.destabAmounts[i] = new Decimal(0)
    }
}