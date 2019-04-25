;(function () {
    'use strict'
    window.addEventListener('load', function () {
        
        let elemListItems = document.querySelector(".navigator").querySelectorAll("li");
        let elemSpanLink = document.getElementById("msg");
        
        for (let i = 0; i < elemListItems.length; i++) {
            elemListItems[i].addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                elemSpanLink.innerHTML = elemListItems[i].querySelector("a").href + " ";
                
                let a = document.createElement('a');
                a.appendChild(document.createTextNode("(link)"));
                a.href = elemListItems[i].querySelector("a").href;
                elemSpanLink.appendChild(a);
            });
        }
    }); // load
})(); // function