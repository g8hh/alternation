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
    //misc displays
    document.getElementById("versionText").innerHTML = `[Alpha v${updateIDs[0]}.${updateIDs[1]}.${updateIDs[2]}]`
}