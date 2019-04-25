// Werkt NIET
;(function () {
    'use strict'
    window.addEventListener('load', function () {
        let elemEmail = document.getElementById("inpEmail");
        let elemPassword = document.getElementById("inpPassword");
        
        let elemSpanOutput = document.getElementById('msg');
        elemSpanOutput.innerHTML = "test data";
        
        document.getElementById('frm1').addEventListener('submit', function(e){
            e.preventDefault();
            elemSpanOutput.innerHTML = elemEmail.value + " met wachtwoord " + elemPassword.value;
            console.log("onsubmit executed properly");
            //alert("alert");
        });
        
        /*document.getElementById('btnLogin').addEventListener('click', function() {
            elemSpanOutput.innerHTML = elemEmail.value + " met wachtwoord " + elemPassword.value;
            console.log("click executed properly");
            });*/
    }); // load
})(); // function