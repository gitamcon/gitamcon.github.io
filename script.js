var expanded = false;
const alphaContainer = document.querySelector("#alpha");
const betaContainer = document.querySelector("#beta")

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    var button = document.getElementById("select_button");
    if (!expanded) {
        checkboxes.style.display = "block";
        button.style.borderBottomLeftRadius = 0;
        button.style.borderBottomRightRadius = 0;
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        button.style.borderRadius = "20px";
        expanded = false;
    }
}

function GetSelected() {
    var selectedPlayers = new Array();
    var playerData = document.getElementById("checkboxes");

    var chks = playerData.getElementsByTagName("INPUT");

    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            selectedPlayers.push(chks[i].value);
        }
    }

    shuffle(selectedPlayers)
    makeList(selectedPlayers);

};

function makeList(selectedPlayers) {
    document.getElementById("alpha_block").style.display = "block";
    document.getElementById("beta_block").style.display = "block";


    removeAllChildNodes(alphaContainer);
    removeAllChildNodes(betaContainer);

    let alphalistContainer = document.createElement('div'),
        betalistContainer = document.createElement('div'),
        alphaListElement = document.createElement('ul'),
        betaListElement = document.createElement('ul'),

        numberOfListItems = selectedPlayers.length,
        middle = Math.ceil(numberOfListItems / 2),
        listItem,
        i;

    // Alpha Team
    document.getElementById('alpha').appendChild(alphalistContainer);
    alphalistContainer.appendChild(alphaListElement);
    for (i = 0; i < middle; i++) {
        listItem = document.createElement('li');
        listItem.innerHTML = selectedPlayers[i];
        alphaListElement.appendChild(listItem);
    }

    // Beta Team
    document.getElementById('beta').appendChild(betalistContainer);
    betalistContainer.appendChild(betaListElement);
    for (i = middle; i < numberOfListItems; i++) {
        listItem = document.createElement('li');
        listItem.innerHTML = selectedPlayers[i];
        betaListElement.appendChild(listItem);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {


        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;


        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
