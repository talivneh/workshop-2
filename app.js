const endGameData = [{
    name: "space-stone", avengers: ["captain-america", "iron-man"]
}, {
    name: "mind-stone", avengers: ["ant-man", "captain-america"]
}, {
    name: "reality-stone", avengers: ["rocket-raccoon", "thor"]
}, {
    name: "power-stone", avengers: ["war-machine", "nebula"]
}, {
    name: "time-stone", avengers: [{name: "hulk"}]
}, {
    name: "soul-stone", avengers: ["black-widow", "hawkeye"]
}];

const stones = document.querySelectorAll('.stone');
const avengers = document.querySelectorAll('.avenger');
const glove = document.querySelector('.infinity_glove');

let clickedStones;
const clickedAvengers = []

stones.forEach(stone => stone.addEventListener('click', ({target}) => {
    onStoneClicked(target);
}))

avengers.forEach(avenger=>avenger.addEventListener('click', ({target}) => {
    onAvengerClicked(target);
}))

function onStoneClicked(stone){
    clickedStones = stone.id;
}

function onAvengerClicked(avenger){
    clickedAvengers.push(avenger.id);
}

function onGloveClicked(){

}