let data = [
    number, gain,
    increaserCosts, increaserIncreases,increaserProductions,
    updateIDs,
]
let saveString
function save(){
    data = [
        number, gain,
        increaserCosts, increaserIncreases,increaserProductions,
        updateIDs,
    ]
    saveString = JSON.stringify({data})
    localStorage.setItem('savedData', saveString)
}
function load(){
    saveString = localStorage.getItem('savedData')
    data = JSON.parse(saveString)
}
window.onload = function (){ load() };
window.setInterval(function (){
    save()
}, 1000);
