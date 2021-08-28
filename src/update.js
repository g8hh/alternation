function updateHTML(){
    //number displays
    document.getElementById("numberDisplay").innerHTML = `Your Number is ${format(number)}`
    document.getElementById("numberGainDisplay").innerHTML = `Your Number is Increasing by ${format(gain)}/s`
    //producer displays
    document.getElementById("producerOne").innerHTML =
        `Producer 1<br>Cost: ${format(producerCosts[0])}<br>Each one increases Your Number by ${format(producerIncreases[0])}/s`;
    document.getElementById("producerTwo").innerHTML =
        `Producer 2<br>Cost: ${format(producerCosts[1])}<br>Each one increases Your Number by ${format(producerIncreases[1])}/s`;
    document.getElementById("producerThree").innerHTML =
        `Producer 3<br>Cost: ${format(producerCosts[2])}<br>Each one increases Your Number by ${format(producerIncreases[2])}/s`;
}