// backticks compatibility!
// textContent --> niet checken op HTML

let elemImageBig = document.getElementById("imgBig");
let pElementen = document.getElementsByTagName("p");
let elemTitel = pElementen[1];

let fotoIndex = 0;

let photos = [
        { url: '//bitmatters.be/o/img/photo1-m.jpg', title: 'stad nabij Petra'},
        { url: '//bitmatters.be/o/img/photo17-m.jpg', title: 'Noorderlicht, Lapland'},
        { url: '//bitmatters.be/o/img/photo6-m.jpg', title: 'Mozaïek, Iran'},
        { url: '//bitmatters.be/o/img/photo12-m.jpg', title: 'Wadi Shab, Oman'},
        { url: '//bitmatters.be/o/img/photo3-m.jpg', title: 'Ait Ben Haddou, Marokko'},
        { url: '//bitmatters.be/o/img/photo20-m.jpg', title: 'Bevroren bomen, Finland'}
    ];


;(function () {
    'use strict'
    
    window.addEventListener('load', function () {
        toonFoto();
        
        document.getElementById('btnEerste').addEventListener('click', 
        function() {
            fotoIndex = 0;
            toonFoto();
        });
        
        document.getElementById('btnVorige').addEventListener('click', 
        function() {
            if (fotoIndex != 0)
                fotoIndex--;
            else
                fotoIndex = photos.length-1;
            toonFoto();
        });
        
        document.getElementById('btnVolgende').addEventListener('click', 
        function() {
            
            if (fotoIndex != photos.length-1)
                fotoIndex++;
            else
                fotoIndex = 0;
            toonFoto();
                
        });
        
        document.getElementById('btnLaatste').addEventListener('click', 
        function() {
            fotoIndex = photos.length-1;
            toonFoto();
        });

    }); // load
})(); // function


function toonFoto() {
    elemImageBig.src = photos[fotoIndex].url;
    elemTitel.innerHTML = `foto ${fotoIndex + 1}: ${photos[fotoIndex].title}`;
}