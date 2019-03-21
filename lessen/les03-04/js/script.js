/*; om vorige code te stoppen, laatste () voor uitvoering deze functie*/
/*; problemene met undefined var vr brackets OF via ESlint*/
/*global window, document*/
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
        
    
    /* -------------------- Checking email -------------------- */
    let form = document.getElementById('login__form');
    form.addEventListener('submit', 
    function(e) {
        // verberg loginmodal
        console.log(`email: ${form.elements[0].value}\nwachtwoord: ${form.elements[1].value}`);
        
        // display errPwd op none-block zetten
        e.preventDefault();
        e.stopPropagation();
        
        // regex expressie ivm validatie
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(form.elements[0].value).toLowerCase()))
            document.getElementById('loginmodal').classList.add('loginmodal--verborgen');
    });
        
    /* -------------------- Changing to the bigger picture -------------------- */
    let largeFigure = document.getElementById('large__figure').querySelector('img');
    let smallFigureContainer = document.getElementsByClassName('main__thumbs');
         
    let smallFigures = smallFigureContainer[0].querySelectorAll('img');
    
        
    // Listing smallImage-links and attaching preventDefault & enlargement eventhandlers
    let counter = 0;
    let imageLinks = smallFigureContainer[0].querySelectorAll('a');
    
    for (let linkItem of imageLinks){
        counter++;
        linkItem.addEventListener('click', function(e) {
            e.preventDefault(); // preventing the link from opening
            console.log('An image was clicked');
            largeFigure.src = linkItem.href; // enlarging the image
        })
    }
    console.log(`There are ${counter.toString()} link(s) set with preventDefault = true`);
        
    }); // load
})(); // function