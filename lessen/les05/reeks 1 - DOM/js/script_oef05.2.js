// textContent --> niet checken op HTML
;(function () {
    'use strict'
    let elemInput = document.getElementById("inpIn");
    let elemTxtOut = document.getElementById("txtOut");
    
    window.addEventListener('load', function () {
        
        document.getElementById('btnAdd').addEventListener('click', 
        function() {
            
            if (elemInput.value === ""){
                    alert("Geen input gedetecteerd!");
                    return false;
                }
                    
            // De tekst kopieëren
            elemTxtOut.innerHTML += elemInput.value + "<br>";

            elemInput.value = "";
        });

    }); // load
})(); // function