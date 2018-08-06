/*
    snoot.js
    Form Validation code for snoot.html

    Author: Jamin Pottle
    Date: 8.6.18
*/

"use strict";

// function to remove select list defaults 
function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName('select');
    console.log(emptyBoxes);
    console.log(emptyBoxes.length)
}

// page load event handlers
if (window.addEventListener) {
    window.addEventListener("load", removeSelectDefaults, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", removeSelectDefaults);
}
