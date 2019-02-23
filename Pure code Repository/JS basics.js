(function() {
    
    "use strict";
    
    // FUNCTIONS
    /**
     * PHPDoc-style block comment:
     * Executed when the module is loaded
     *
     * @param mixed $parameter A parameter, used for literally nothing right now.
     *
     * @return boolean
    */
    let icecreamFunction = function(parameter) {
        
        alert("Hello!");
        let name = prompt("Your name please!");
        
        let icecreamDecision = confirm("You want Ice cream?");
        
        if (icecreamDecision) console.log(`Dear ${name}:\nI'm a website, I don't have any Ice cream on me :/`);
        else console.log(`Dear ${name}:\nI'm a website, I wouldn't have had any Ice cream on me anyway!`);
    }
    
    // VARIABLES
    let num = 3; // number
    let boo = true; // boolean
    let str = 'hello'; // string; note: you may use single or double quotes
    let fun = function(nm) { console.log('hello' + nm) }; // function
    let arr = [1, 2, 3, 5, 8, 13]; // array
    let rex = /^\d+$/ // regular expression
    let obj = { id: 2, url: 'img/me.jpg', hidden: false } // general object
    let dat = new Date(); // Date object
    
    // CONSTANTS
    const PI = 3.141592653589793;
    const NUM_LIVES = 3;
    const CAR_MAKES = ['Saab', 'Volvo', 'BMW'];  
    const ME = { name: 'Rogier', age: 48 } 
    
    // OBJECTS
    let animal = {
        species: 'Turtle',
        name: 'Jack',
        shoutName: function() {alert(`${this.name} is the ${this.species}'s name!`)}
    };
    
    animal.age = 11;
    
    console.log(`${animal.species} with name ${animal.name} at age ${animal.age}`);
    animal.shoutName();
    
    // ANONYMOUS OBJECTS
    
    let showAnimal = function(param){
        console.log(`${param.name} of species ${param.species} at age ${param.age}`)
    }
    
    showAnimal({
      species: 'Parrot',
      age: 12, 
      name: "John", 
    });
    
    // FOR LOOP
    let forrestFriends = ['Bubba', 'Lt. Dan'];

    for (let i = 0; i < forrestFriends.length; i++) {
      console.log('friend number ' + i + ': ' + forrestFriends[i]);
    };
        
    // OBJECT FOR LOOP
    let forrest = {
      firstName: 'Forrest',
      lastName: 'Gump'
    };
        
    for (let key in forrest) {
      console.log(key + ' = ' + forrest[key]);
    };
    
    // EVENTS - anonymous functions (no name)
    window.addEventListener('load', function() {
        icecreamFunction();
    });
})();


