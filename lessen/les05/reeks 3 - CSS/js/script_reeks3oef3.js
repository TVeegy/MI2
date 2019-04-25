;(function () {
    'use strict'
    window.addEventListener('load', function () {
        
        let elemTekst = document.getElementById("txt1");
        elemTekst.style.visibility = "visible";
        
        document.getElementById("btn1").addEventListener('click', 
        function() {
            elemTekst.style.visibility = (elemTekst.style.visibility == "visible" ? "hidden" : "visible");
        });

    }); // load
})(); // function