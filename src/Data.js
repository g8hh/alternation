let loaded = false
//create all the variables in a data object for saving
let data = {
//number
    number: new Decimal(10),
    gain: new Decimal(0),
//increasers
    increaserCosts: [new Decimal(10), new Decimal(150), new Decimal(500)],
    increaserIncreases: [new Decimal(1), new Decimal(10), new Decimal(50)],
    increaserProductions: [new Decimal(0), new Decimal(0), new Decimal(0)],
//multis
    multiCosts: [new Decimal(1e6)],
    multiIncreases: [new Decimal(5)],
    multiBoosts: [new Decimal(0)],
//misc
    currentTab: 1,
    updateIDs: [0, 2, 0],
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
window.setInterval(function(){
    save()
}, 1000);
window.onload = function (){
    loaded = false
    load()
}
//full reset
function fullReset(){
    window.localStorage.removeItem('savedData')
    location.reload()
}

