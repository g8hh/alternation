function updateHTML(){
    //number displays
    document.getElementById("numberDisplay").innerHTML = `Your Number is ${format(data.number)}`
    document.getElementById("numberGainDisplay").innerHTML = `Your Number is Increasing by ${format(data.gain)}/s`
    //producer displays
    document.getElementById("producerOne").innerHTML =
        `Increaser 1<br>Cost: ${format(data.increaserCosts[0])}<br>Each one increases Your Number by ${format(data.increaserIncreases[0])}/s`;
    document.getElementById("producerTwo").innerHTML =
        `Increaser 2<br>Cost: ${format(data.increaserCosts[1])}<br>Each one increases Your Number by ${format(data.increaserIncreases[1])}/s`;
    document.getElementById("producerThree").innerHTML =
        `Increaser 3<br>Cost: ${format(data.increaserCosts[2])}<br>Each one increases Your Number by ${format(data.increaserIncreases[2])}/s`;
    //multi displays
    document.getElementById("multiOne").innerHTML =
        `The Multiplier<br>Cost: ${format(data.multiCosts[0])}<br>Reset all of your Increaser 1-3s but multiply the production of Increaser 1 by 5x<br>Currently: ${data.multiBoosts[0]}x`
    //misc displays
    document.getElementById("versionText").innerHTML = `[Alpha v${data.updateIDs[0]}.${data.updateIDs[1]}.${data.updateIDs[2]}]`

    showAndHideStuff()
}
function showAndHideStuff(){
    //increasers tab
    let increasers = document.getElementsByClassName("producer")
    for (let i = 0; i < increasers.length; i++) {
        increasers[i].style.display = data.currentTab===1 ? 'flex' : 'none'
    }
    let multis = document.getElementsByClassName("multi")
    for (let i = 0; i < multis.length; i++) {
        multis[i].style.display = data.currentTab===1 ? 'flex' : 'none'
    }
    //settings
    let settingsElements = document.getElementsByClassName("settingsElement")
    for (let i=0; i<settingsElements.length; i++){
        settingsElements[i].style.display = data.currentTab===2 ? 'flex' : 'none'
    }
}