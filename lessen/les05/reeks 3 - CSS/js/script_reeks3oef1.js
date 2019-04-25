;(function () {
    'use strict'
    window.addEventListener('load', function () {
        
        let elemKleur = document.getElementById("inpColor");
        let elemTekstgrootte = document.getElementById("rngSize");
        let elemlettertype = document.getElementById("selFamily");
        
        let elemTekst = document.getElementById("text");
        
        elemKleur.addEventListener('change', 
        function() {
            elemTekst.style.color = elemKleur.value;
        });
        
        elemTekstgrootte.addEventListener('input', 
        function() {
            elemTekst.style.fontSize = elemTekstgrootte.value + "px";
        });
        
        elemlettertype.addEventListener('change', 
        function() {
            elemTekst.style.fontFamily = elemlettertype.value;
        });

    }); // load
})(); // function