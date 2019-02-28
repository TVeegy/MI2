(function() {
    "use strict";
    
    // GLOBAL VARIABLES
    
    let globalImages;
    
    // FUNCTIONS
    
    // Setting all alt texts to be equal to the title texts.
    let addTitles = function(){
        console.log('\n');
        globalImages = document.querySelectorAll("img");
        
        for (let image of globalImages){
            image.title = image.alt;
        }
        console.log(`${globalImages.length} image(s) with filled in (copied) alt text.`);
    }
    
    // Working with a global variable:
    let imageIsVisible = true;
    // working with an element property:
    let imgSourceButton = document.getElementById("btnImgSource");
    
    // Showing the alt texts by sabotaging the image source attribute.
    let sabotageImgSource = function(){
        console.log('\n');
        
        if (imageIsVisible)
            for (let image of globalImages){
                image.src = image.src + "X";
                console.log(`New image source: ${image.src}`);
                
                imageIsVisible = false;
                imgSourceButton.style.backgroundColor = "red";
                console.log("FIRST");
            }
        
        else
            for (let image of globalImages){
                image.src = image.src.substr(0, image.src.length-1);
                console.log(`Image source restored to: ${image.scr}`);
                
                imageIsVisible = true;
                imgSourceButton.style.backgroundColor = "green";
                console.log("SECOND");
            }   
    }
    
    // TESTING FUNCTIONS
    let testingSomeStuff = function() {
        console.log("Starting test:")
        // collection all images...
        let globalImages = document.querySelectorAll("img");
        
        // test on first entry
        let image = globalImages[0];
        
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
        
        //testingSomeStuff();
    });
    
    document.getElementById("btnImgSource").addEventListener('click', function() {
        sabotageImgSource();
    });
})();


