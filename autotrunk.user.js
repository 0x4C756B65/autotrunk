// ==UserScript==
// @name         CryptoTrunks
// @version      0.2
// @description  Automate CryptoTrunks generation to find specified property
// @author       Luke
// @match        https://cryptotrunks.co/reforest-in-progress*
// ==/UserScript==

var PROPERTY1 = "Sapling";
var PROPERTY2 = "Evening";
var PROPERTY3 = "Grass";


setTimeout(function() {

var content = document.body.textContent || document.body.innerText;
var hasProperty = content.indexOf(PROPERTY1)!==-1;
var hasProperty2 = content.indexOf(PROPERTY2)!==-1;
var hasProperty3 = content.indexOf(PROPERTY3)!==-1;

if(hasProperty && hasProperty2 && hasProperty3){
    alert("CryptoTrunk Property Found");
}else{
    console.log("Property Not Found");
    document.location.href = "https://cryptotrunks.co/reforest-in-progress";
}

}, 15000);
