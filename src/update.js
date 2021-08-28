function updateHTML(){
    //number displays
    document.getElementById("numberDisplay").innerHTML = `Your Number is ${number}`
    document.getElementById("numberGainDisplay").innerHTML = `Your Number is Increasing by ${gain}/s`
    //producer displays
    document.getElementById("producerOne").innerHTML =
        `Producer 1<br>Cost: ${producerCosts[0]}<br>Each one increases Your Number by ${producerIncreases[0]}/s`;
    document.getElementById("producerTwo").innerHTML =
        `Producer 2<br>Cost: ${producerCosts[1]}<br>Each one increases Your Number by ${producerIncreases[1]}/s`;
    document.getElementById("producerThree").innerHTML =
        `Producer 3<br>Cost: ${producerCosts[2]}<br>Each one increases Your Number by ${producerIncreases[2]}/s`;
}