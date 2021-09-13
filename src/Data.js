let loaded = false
//create all the variables in a data object for saving
let data = {
//halfPoints
    halfPoints: new Decimal(10),
    halfPointGain: new Decimal(0),
//increasers
    destabCosts: [new Decimal(10), new Decimal(300), new Decimal(2e6), new Decimal(1e10)],
    destabIncreases: [new Decimal(1), new Decimal(1), new Decimal(1), new Decimal(1)],
    destabProductions: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
//misc
    currentTab: 1,
    updateIDs: [0, 4, 0],
}
//decimal serializing
let tagged_classes = new Map();
const register_tag = clazz => tagged_classes.set(clazz.name, clazz);
register_tag(Decimal);
function tagging(k, v) {
    let cName = this[k]?.constructor?.name;
    return !(k == 'v' && this.hasOwnProperty ('#tag')) && tagged_classes.has(cName) ? {'#tag': cName, v} : v;
}
const untagging = (_, v) => (v?.hasOwnProperty('#tag')) ? new (tagged_classes.get(v['#tag']))(v.v) : v;
//saving and loading
function save(){
    window.localStorage.setItem('savedData', JSON.stringify(data, tagging))
}
function load(){
    Object.assign(data, JSON.parse(window.localStorage.getItem('savedData'), untagging));
    loaded = true
}
function fixOldSaves(){
    if (data.updateIDs[1] == 3) fullReset()
}
window.setInterval(function(){
    save()
}, 1000);
window.onload = function (){
    loaded = false
    load()
    fixOldSaves()
}
//full reset
function fullReset(){
    window.localStorage.removeItem('savedData')
    location.reload()
}

