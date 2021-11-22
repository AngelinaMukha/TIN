const Cat={
    name: 'Stive',
    color: 'white',
    age: 2,
    displayData: function() { 
        console.log(`Cat's name: ${this.name}, color: ${this.color}, age: ${this.age}`);
    },
    voice: function() { 
        console.log(`Miau`);
    },
    walk: function() { 
        console.log(`Cat is walking`);
    },
}
function getDataOf(someCat){
    console.log(`${someCat.name} - type: ${typeof (someCat.name)}, ${someCat.color} - type: ${typeof (someCat.color)}, ${someCat.age} - type: ${typeof (someCat.age) }`);
}
getDataOf(Cat);