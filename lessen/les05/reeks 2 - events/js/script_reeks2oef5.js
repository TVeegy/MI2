;(function () {
    'use strict'
    window.addEventListener('load', function () {
        let elemSlider = document.getElementById("rng1");
        let elemSpanResult = document.getElementById("num");
        
        elemSlider.addEventListener('input', function() {
            elemSpanResult.innerHTML = elemSlider.value;
            });
        
        document.getElementById('btnReset').addEventListener('click', function() {
            let defaultWaarde = "5";
            elemSlider.value = defaultWaarde;
            elemSpanResult.innerHTML = defaultWaarde;
            });
    }); // load
})(); // function