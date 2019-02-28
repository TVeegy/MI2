/*; om vorige code te stoppen, laatste () voor uitvoering deze functie*/
;(function () {
    'use strict'
    
    window.addEventListener('load', function () {
    // code wordt uitgevoerd na het laden vd pagina
    
    document.getElementById('btnLogin').addEventListener('click', 
    function() {
        // toon loginmodal
        document.getElementById('loginmodal').classList.remove('loginmodal--verborgen');
    });
        
    document.getElementById('btnCancel').addEventListener('click', 
    function() {
        // verberg loginmodal
        document.getElementById('loginmodal').classList.add('loginmodal--verborgen');
    });
        
    let form = document.getElementById('login__form');
    form.addEventListener('submit', 
    function() {
        // verberg loginmodal
        console.log(`email: ${form.elements[0].value}\nwachtwoord: ${form.elements[1].value}`);
        

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(form.elements[0].value).toLowerCase()))
            document.getElementById('loginmodal').classList.add('loginmodal--verborgen');
    });
        
        
    });
})();