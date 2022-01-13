function canHalfJump(){
    if (data.timesHalfJumped == 0 && data.hasUpgrade[3] && data.halfPoints.gte(1e21)) data.canHalfJump = true
    else data.canHalfJump = false
    //future requirements will go here
}
function halfJumpReset(){
    if (data.canHalfJump){
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
        data.timesHalfJumped = data.timesHalfJumped.plus(1)
    }
}