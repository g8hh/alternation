function updateHTML(){
    //number displays
    document.getElementById("numberDisplay").innerHTML = `Your Number is ${format(number)}`
    document.getElementById("numberGainDisplay").innerHTML = `Your Number is Increasing by ${format(gain)}/s`
    //producer displays
    document.getElementById("producerOne").innerHTML =
        `Increaser 1<br>Cost: ${format(increaserCosts[0])}<br>Each one increases Your Number by ${format(increaserIncreases[0])}/s`;
    document.getElementById("producerTwo").innerHTML =
        `Increaser 2<br>Cost: ${format(increaserCosts[1])}<br>Each one increases Your Number by ${format(increaserIncreases[1])}/s`;
    document.getElementById("producerThree").innerHTML =
        `Increaser 3<br>Cost: ${format(increaserCosts[2])}<br>Each one increases Your Number by ${format(increaserIncreases[2])}/s`;
    //multi displays
    document.getElementById("multiOne").innerHTML =
        `The Multiplier<br>Cost: ${format(multiCosts[0])}<br>Reset all of your Increaser 1-3s but multiply the production of Increaser 1 by 5x<br>Currently: ${multiBoosts[0]}x`
    //misc displays
    document.getElementById("versionText").innerHTML = `[Alpha v${updateIDs[0]}.${updateIDs[1]}.${updateIDs[2]}]`

    showAndHideStuff()
}
function showAndHideStuff(){
    //increasers tab
    let increasers = document.getElementsByClassName("producer")
    for (let i = 0; i < increasers.length; i++) {
        increasers[i].style.display = currentTab===1 ? 'flex' : 'none'
    }
    let multis = document.getElementsByClassName("multi")
    for (let i = 0; i < multis.length; i++) {
        multis[i].style.display = currentTab===1 ? 'flex' : 'none'
    }
    //settings
    let settingsElements = document.getElementsByClassName("settingsElement")
    for (let i=0; i<settingsElements.length; i++){
        settingsElements[i].style.display = currentTab===2 ? 'flex' : 'none'
    }
}