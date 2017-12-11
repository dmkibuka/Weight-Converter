//Fetch all DOM elements
let weightType = document.getElementById('weightType');
let weightValue = document.getElementById('weightValue');
let lbsCard = document.getElementById('lbsCard');
let kgsCard = document.getElementById('kgsCard');
let gmsCard = document.getElementById('gmsCard');
let tonCard = document.getElementById('tonCard');
let ozCard = document.getElementById('ozCard');
let toTonnes = document.getElementById('toTonnes');
let toPounds = document.getElementById('toPounds');
let toKilograms = document.getElementById('toKilograms');
let toGrams = document.getElementById('toGrams');
let toOunces = document.getElementById('toOunces');

//Hide input value box and output cards
weightValue.style.visibility = 'hidden';
output.style.visibility = 'hidden';

//Selected item or option
let mySelect = '0';

//List of all cards
let cardArray = ['tonCard', 'lbsCard', 'kgsCard', 'gmsCard', 'ozCard'];

//Listen for change in the select box
weightType.addEventListener('change', (e) => {

    // Make input box and cards visible
    weightValue.style.visibility = 'visible';
    output.style.visibility = 'visible';

    //Get current selected option
    let val = e.target.value;

    if (val === '1') {
        mySelect = 1;
        noCard('lbsCard');
    }
    if (val === '2') {
        mySelect = 2;
        noCard('kgsCard');
    }
    if (val === '3') {
        mySelect = 3;
        noCard('gmsCard');
    }
    if (val === '4') {
        mySelect = 4;
        noCard('ozCard');
    }
    if (val === '5') {
        mySelect = 5;
        noCard('tonCard');
    }
});

function noCard(card) {
    for (i = 0; i < cardArray.length; i++) {
        if (cardArray[i] === card) {
            // Hide this card and display the other cards
            document.getElementById(cardArray[i]).style.display = 'none';
        } else {
            document.getElementById(cardArray[i]).style.display = 'block';
        }
        // Update values
        updateValues();
    }
}

// Convert Inputs values
weightValue.addEventListener('input', (e) => {

    //Get current input values
    let val = e.target.value;

    //Convert weights
    wgtConversion(mySelect, val);
});

//Update values once selection changed
function updateValues() {
    let val = weightValue.value;
    wgtConversion(mySelect, val);
}
/**
 * Conversion ratios
 * switch statement
 **/
function wgtConversion(mySelect, val) {
    switch (mySelect) {
        case 1: // From pounds to..
            toTonnes.innerHTML = (val * 0.00045359237).toFixed(4);
            toKilograms.innerHTML = (val * 0.45359237).toFixed(3);
            toGrams.innerHTML = (val * 453.59237).toFixed(3);
            toOunces.innerHTML = val * 16;
            break;

        case 2: // From kilograms to..
            toTonnes.innerHTML = (val * 0.001).toFixed(4);
            toPounds.innerHTML = (val * 2.20462262185).toFixed(3);
            toGrams.innerHTML = val * 1000;
            toOunces.innerHTML = (val * 35.27396195).toFixed(3);
            break;

        case 3: // From Grams to..
            toTonnes.innerHTML = (val * 0.000001).toFixed(6);
            toPounds.innerHTML = (val * 0.00220462262185).toFixed(4);
            toKilograms.innerHTML = (val * 0.001).toFixed(4);
            toOunces.innerHTML = (val * 0.03527396195).toFixed(4);
            break;

        case 4: // From Ounces to..
            toTonnes.innerHTML = '**Kilograms';
            toPounds.innerHTML = (val * 0.0625).toFixed(4);
            toKilograms.innerHTML = (val * 0.02834952).toFixed(4);
            toGrams.innerHTML = (val * 28.34952).toFixed(4);
            break;

        case 5: // From Tonnes to..
            toPounds.innerHTML = (val * 2204.62262185).toFixed(3);
            toKilograms.innerHTML = (val * 1000).toFixed(4);
            toGrams.innerHTML = (val * 1000000).toFixed(4);
            toOunces.innerHTML = '**Kilograms';
            break;
    }
}
