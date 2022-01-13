function updateHTML(){
    //halfPoints displays
    document.getElementById("halfPointDisplay").innerHTML = `You have ${format(data.halfPoints)} Half Points`
    document.getElementById("halfPointGainDisplay").innerHTML = `You are gaining ${format(data.halfPointGain)} every second`
    //producer displays
    if (data.destabIncreases[0].gte(2))
        document.getElementById("destabOne").innerHTML = `Destabilizer 1<br>Cost: ${format(data.destabCosts[0])}<br>Produces ${format(data.destabIncreases[0])} Half Points`;
    else
        document.getElementById("destabOne").innerHTML = `Destabilizer 1<br>Cost: ${format(data.destabCosts[0])}<br>Produces ${format(data.destabIncreases[0])} Half Point`;
    document.getElementById("destabTwo").innerHTML =
        `Destabilizer 2<br>Cost: ${format(data.destabCosts[1])}<br>Produces ${format(data.destabIncreases[1])} Destabilizer 1<br>Currently Producing ${format(data.destabProductions[1])}`;
    document.getElementById("destabThree").innerHTML =
        `Destabilizer 3<br>Cost: ${format(data.destabCosts[2])}<br>Produces ${format(data.destabIncreases[2])} Destabilizer 2<br>Currently Producing ${format(data.destabProductions[2])}`;
    document.getElementById("destabFour").innerHTML =
        `Destabilizer 4<br>Cost: ${format(data.destabCosts[3])}<br>Produces ${format(data.destabIncreases[3])} Destabilizer 3<br>Currently Producing ${format(data.destabProductions[3])}`;
    //upgrades
    if (data.hasUpgrade[0]) document.getElementById("upgradeOne").style.color = `gold`
    if (data.hasUpgrade[1]) document.getElementById("upgradeTwo").style.color = `gold`
    if (data.hasUpgrade[2]) document.getElementById("upgradeThree").style.color = `gold`
    if (data.hasUpgrade[3]) document.getElementById("upgradeFour").style.color = `gold`
    //halfJump display
    if (data.canHalfJump) document.getElementById("halfJump").innerHTML = "Half Jump."
    else document.getElementById("halfJump").innerHTML = "1e21 Half Points and Destabilizing IV are required to unlock Half Jump"
    //misc displays
    document.getElementById("versionText").innerHTML = `[Beta v${data.updateIDs[0]}.${data.updateIDs[1]}.${data.updateIDs[2]}]`

    showAndHideStuff()
}
function upgradeTextUpdate(i){
    //upgrades 1-4
    document.getElementById("upgradesText").innerHTML = `D${i+1} gains a small multiplier based on the amount of D4 you have<br>Currently: ${format(data.upgradeEffects[i])}x<br>Cost: ${format(data.upgradeCosts[i])} Half Points`
}
function showAndHideStuff(){
    //destabilizers tab
    let destabilizers = document.getElementsByClassName("destabilizer")
    for (let i = 0; i < destabilizers.length; i++) {
        destabilizers[i].style.display = data.currentTab===1 ? 'flex' : 'none'
    }
    //upgrades tab
    let upgrades = document.getElementsByClassName("upgrade")
    let upText = document.getElementById("upgradesText")
    let upText2 = document.getElementById("upgradesTopText")
    for (let i = 0; i < upgrades.length; i++) {
        upgrades[i].style.display = data.currentTab===3 ? 'flex' : 'none'
    }
    upText.style.display = data.currentTab===3 ? 'flex' : 'none'
    upText2.style.display = data.currentTab===3 ? 'flex' : 'none'
    // half jump
    let halfJumpElements = document.getElementsByClassName("halfJumpThings")
    for (let i=0; i<halfJumpElements.length; i++){
        halfJumpElements[i].style.display = data.currentTab===4 ? 'flex' : 'none'
    }
    //settings
    let settingsElements = document.getElementsByClassName("settingsElement")
    for (let i=0; i<settingsElements.length; i++){
        settingsElements[i].style.display = data.currentTab===2 ? 'flex' : 'none'
    }
    //nav buttons
    //document.getElementById("halfShopNav").style.display = data.timesHalfJumped.gte(1) ? 'flex' : 'none'
}