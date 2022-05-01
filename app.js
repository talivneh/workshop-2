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
let clickedStoneId = null;
let clickedAvengersIds = [];
const matchedStones = [];

for (let stone of stones) {
    stone.addEventListener('click', ({target}) => {
        onStoneClicked(target);
    });
}

for (let avenger of avengers) {
    avenger.addEventListener('click', ({target}) => {
        onAvengerClicked(target);
    });
}

glove.addEventListener('click', () => {
    onGloveClicked(onMatch, onFail);
});


function onStoneClicked(stone) {
    if (clickedStoneId === stone.id) {
        clearSelection(stone);
        clickedStoneId = null;
    } else {
        markSelected(stone);
        clickedStoneId = stone.id;
    }
}


function onAvengerClicked(avenger) {
    if (clickedAvengersIds.includes(avenger.id)) {
        clearSelection(avenger);
        clickedAvengersIds = clickedAvengersIds.filter((avengerId) => {
            return avengerId !== avenger.id;
        });
    } else {
        markSelected(avenger);
        clickedAvengersIds.push(avenger.id);
    }
}

function onGloveClicked(success, fail) {
    if (!clickedStoneId || !clickedAvengersIds) {
        success();
        return;
    }

    const matchedStone = endGameData.find((stoneAvenger) => {
        return stoneAvenger.name === clickedStoneId;
    });
    let isWrongAvengersSize = matchedStone.avengers.length !== clickedAvengersIds.length;
    if (isWrongAvengersSize) {
        fail();
        return;
    }
    const matchedAvengers = matchedStone.avengers.filter((avenger) => {
        let avengerName = typeof avenger === "string" ? avenger : avenger.name;
        return clickedAvengersIds.includes(avengerName);
    });
    let isPartiallyMatch = matchedAvengers.length !== matchedStone.avengers.length;
    if (isPartiallyMatch) {
        fail();
    }
    return success();
}


function clearSelection(element) {
    element.style.backgroundColor = null;
}

function markSelected(element) {
    element.style.backgroundColor = '#3268bd';
}


function clearCurrentMatch() {
    clickedStoneId = null;
    clickedAvengersIds = [];
    for (let avenger of avengers) {
        clearSelection(avenger);
    }
    for (let stone of stones) {
        clearSelection(stone);
    }
}

function onFail() {
    clearCurrentMatch();
    alert("wrong answer");
}

function onWin() {
    alert("Yay! You're the true Marvel fan!");
}

function onMatch() {
    if (!clickedStoneId) return;
    matchedStones.push(clickedStoneId);
    document.querySelector(`#${clickedStoneId}`).style.visibility = 'hidden';
    clearCurrentMatch();
    //translateX/Y stone to glove
    if (matchedStones.length === endGameData.length) onWin();
}