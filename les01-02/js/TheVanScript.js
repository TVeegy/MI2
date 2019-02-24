(function() {
    "use strict";
    
    let globalImages;
    
    // FUNCTIONS
    let addTitles = function() {
        let images = document.querySelectorAll("img");
        globalImages = images;
        for (let singleImage of images){
            singleImage.title = singleImage.alt;
        }
        console.log(`${images.length} image(s) with new (copied) alt text.`);
    }
    
    let state = true;
    let disableImgSource = function() {
        if (state)
            for (let singleImage of globalImages){
                singleImage.src = singleImage.src + "X";
                console.log(singleImage.src);
                state = false;
            }
        
        else
            for (let singleImage of globalImages){
                singleImage.src = singleImage.src.substr(0, singleImage.src.length-1);
                state = true;
            }
            
    }
    
    // TESTING FUNCTIONS
    let testingSomeStuff = function() {
        console.log("Starting test:")
        // collection all images...
        let images = document.querySelectorAll("img");
        
        // test on first entry
        let image = images[0];
        
        // testing referencing
        console.log(`\nImage title: ${image.title}`);
        console.log(`Image alt text: ${image.alt}`);

        console.log("\ncreating reference variables..");
        console.log("setting title var to new value..");
        let propTitle = image.title;
        let propAlt = image.alt;
        propTitle = "-test-";
        
        console.log(`Edited value of ref var (title): ${propTitle}`);

        console.log(`\nImage title: ${image.title}`);
        console.log(`Image alt text: ${image.alt}`);
    }
    
    // EVENTS
    window.addEventListener('load', function() {
        addTitles();
        disableImgSource();
        disableImgSource(false);
        //testingSomeStuff();
    });
    
    document.getElementById("TEST").addEventListener('click', function() {
        disableImgSource();
    });
})();


