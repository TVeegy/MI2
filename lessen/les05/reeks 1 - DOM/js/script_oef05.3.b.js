// textContent --> niet checken op HTML
;(function () {
    'use strict'
    let elemImageBig = document.getElementById("imgBig");
    
    let pElementen = document.getElementsByTagName("p");
    let elemTitel = pElementen[1];
    
    let photos = [
			'//bitmatters.be/o/img/photo1-m.jpg',
			'//bitmatters.be/o/img/photo17-m.jpg',
			'//bitmatters.be/o/img/photo6-m.jpg',
			'//bitmatters.be/o/img/photo12-m.jpg',
			'//bitmatters.be/o/img/photo3-m.jpg',
			'//bitmatters.be/o/img/photo20-m.jpg'
		];
    
    window.addEventListener('load', function () {
        
        document.getElementById('btnRandom').addEventListener('click', 
        function() {
            elemImageBig.src = photos[Math.floor(Math.random() * 6)];
            
            elemTitel.innerHTML = `titel van ${elemImageBig.src}`;
        });

    }); // load
})(); // function