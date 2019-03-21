;
let fotoIndex = 0;
let photos = [
			'//bitmatters.be/o/img/photo1-m.jpg',
			'//bitmatters.be/o/img/photo17-m.jpg',
			'//bitmatters.be/o/img/photo6-m.jpg',
			'//bitmatters.be/o/img/photo12-m.jpg',
			'//bitmatters.be/o/img/photo3-m.jpg',
			'//bitmatters.be/o/img/photo20-m.jpg'
		];
let imageBig = document.getElementById("imgBig");
(
    function () {
    'use strict'
    window.addEventListener('load', function () {
        toonFoto();
        
        document.onkeydown = function (e) {
            // Werkt niet met ===
            if (e.keyCode == "37") {
                if (fotoIndex != 0)
                    fotoIndex--;
                else
                    fotoIndex = photos.length-1;
                toonFoto();
                return false;
            }
            if (e.keyCode == "39") {
                if (fotoIndex != photos.length-1)
                    fotoIndex++;
                else
                    fotoIndex = 0;
                toonFoto();
                return false;
            }
        }

    }); // load
})(); // function

function toonFoto() {
    imageBig.src = photos[fotoIndex];
}