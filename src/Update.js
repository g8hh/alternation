function updateHTML(){
    //halfPoints displays
    document.getElementById("halfPointDisplay").innerHTML = `You have ${format(data.halfPoints)} Half Points`
    document.getElementById("halfPointGainDisplay").innerHTML = `You are gaining ${format(data.halfPointGain)} every second`
    //producer displays
    document.getElementById("destabOne").innerHTML =
        `Destabilizer 1<br>Cost: ${format(data.destabCosts[0])}<br>Produces ${format(data.destabIncreases[0])} Half Point`;
    document.getElementById("destabTwo").innerHTML =
        `Destabilizer 2<br>Cost: ${format(data.destabCosts[1])}<br>Produces ${format(data.destabIncreases[1])} Destabilizer 1<br>Currently Producing ${format(data.destabProductions[1])}`;
    document.getElementById("destabThree").innerHTML =
        `Destabilizer 3<br>Cost: ${format(data.destabCosts[2])}<br>Produces ${format(data.destabIncreases[2])} Destabilizer 2<br>Currently Producing ${format(data.destabProductions[2])}`;
    document.getElementById("destabFour").innerHTML =
        `Destabilizer 4<br>Cost: ${format(data.destabCosts[3])}<br>Produces ${format(data.destabIncreases[3])} Destabilizer 3<br>Currently Producing ${format(data.destabProductions[3])}`;
    //misc displays
    document.getElementById("versionText").innerHTML = `[Beta v0.4.0]`

    showAndHideStuff()
}
function showAndHideStuff(){
    //destabilizers tab
    let destabilizers = document.getElementsByClassName("destabilizer")
    for (let i = 0; i < destabilizers.length; i++) {
        destabilizers[i].style.display = data.currentTab===1 ? 'flex' : 'none'
    }
    //settings
    let settingsElements = document.getElementsByClassName("settingsElement")
    for (let i=0; i<settingsElements.length; i++){
        settingsElements[i].style.display = data.currentTab===2 ? 'flex' : 'none'
    }
}