;(function () {
    'use strict'
    window.addEventListener('load', function () {
        let elemTxtInput = document.getElementById("inpIn");
        let elemKarakters = document.querySelector("#msgTyped").querySelector("span");
        
        document.getElementById('inpIn').addEventListener('keypress', 
        function(e) {
            if(e.keyCode === 13){
                elemTxtInput.value = "";
                elemKarakters.innerHTML = elemTxtInput.value.length;
                return false;
            }
            
            elemKarakters.innerHTML = elemTxtInput.value.length + 1;
        });

    }); // load
})(); // function