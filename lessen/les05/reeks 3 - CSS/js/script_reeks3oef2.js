;(function () {
    'use strict'
    window.addEventListener('load', function () {
        
        let elemRotatie = document.getElementById("rngRotate");
        
        elemRotatie.addEventListener('input', 
        function() {
            document.getElementsByClassName("box")[0].style.transform = "rotate(" + elemRotatie.value + "deg)";
        });

    }); // load
})(); // function