;(function () {
    'use strict'
    window.addEventListener('load', function () {
        let elemTxtIn = document.getElementById("txtIn");
        let elemTxtOut = document.getElementById("txtOut");
        let elemKarakters = document.querySelector("p span");
        
        document.getElementById('btnGo').addEventListener('click', 
        function() {
            
            if (elemTxtIn.innerHTML === ""){
                    alert("Geen input gedetecteerd!");
                    elemKarakters.innerHTML = "0";
                    return false;
                }
                    
            // De tekst kopieëren
            elemTxtOut.innerHTML = elemTxtIn.innerHTML;

            // Karakters tellen
            elemKarakters.innerHTML = elemTxtIn.innerHTML.length;

            while (elemTxtIn.firstChild) elemTxtIn.removeChild(elemTxtIn.firstChild);
        });

    }); // load
})(); // function