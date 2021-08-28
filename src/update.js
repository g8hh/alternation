function updateHTML(){
    document.getElementById("numberDisplay").innerHTML = `Your Number is ${number}`
    document.getElementById("numberGainDisplay").innerHTML = `You are gaining ${gain}/s`
    document.getElementById("producerOne").innerHTML =
        `Producer 1<br>Cost: ${producerCosts[0]}<br>Currently Producing ${producerProductions[0]}/s`;
}