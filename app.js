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

const matchData ={
    stone: null,
    avengers: []
}

let currentStoneToRemove = null;

stones.forEach(stone => stone.addEventListener('click', ({target}) => {
    onStoneClicked(target);
}))

avengers.forEach(avenger=> avenger.addEventListener('click', ({target}) => {
    onAvengerClicked(target);
}))

function onStoneClicked(stone){
    let color = "blue"
    const currentStone = document.getElementById(stone.id);
    matchData.stone = stone.id;
    currentStone.style.backgroundColor = color;
}

function onAvengerClicked(avenger){
    let color = "blue"
    matchData.avengers.push(avenger.id);
    const currentAvenger = document.getElementById(avenger.id);
    currentAvenger.style.backgroundColor = color;
}

glove.addEventListener('click', onGloveClicked)

function onGloveClicked(){

let isCorrect;

   const chosenStone = endGameData.find(({name})=> {
       return name === matchData.stone;
    })

    if(matchData.avengers.length != chosenStone.avengers.length){
        alert("mistake!")
    }else{
       if(matchData.avengers.every(avenger => chosenStone.avengers.includes(avenger || avenger.name))){
           alert("correct!")
       }
    }

    endRound(isCorrect)
}

function endRound(isCorrect = false){

    document.getElementById(matchData.stone).style.backgroundColor= "transparent";

    matchData.avengers.map(avenger=>{
        document.getElementById(avenger).style.backgroundColor= "transparent";
    })

     if(isCorrecte){
        document.removeChild(document.getElementById(matchData.stone));
    }

    matchData.stone = null;
    matchData.avengers = [];

}