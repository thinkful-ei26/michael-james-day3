'use strict';

function Animal(){ }

Animal.prototype = {
    constructor: Animal,
    warmblooded: true,          //public
    eat: function(){console.log("nom nom nom");},
    describe: function(){
        console.log("My name is " + this.name + " and I'm an Animal.");
    }
};


function Bird(name){
	this.name = name;		//public
    let weight = 10;		//private to Bird, out of scope of new Bird (s)
    this.isWarmblooded = function(){console.log("am i warm? "+ this.warmblooded);};
    this.getWeight = function(){
			return console.log("My private weight is: " + weight);
        };	
    this.setWeight = function(num){
        weight = num;
    };				//this makes .getWeight any instances' method (&closure)
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.fly = function(){
    console.log("I'm flying!");
};

let duck = new Bird("Daffy");
console.log(`Object keys: ${Object.keys(duck)}`);
let aliveMixin = function(obj){
    
    obj.isAlive = function(){
        return console.log("It's Alive!");
    };
};
aliveMixin(duck);
duck.eat();     //from animal
duck.describe();//method from animal, value from bird
duck.fly();     //from bird
duck.getWeight(); //from bird method, private bird value;
duck.isAlive();
duck.isWarmblooded();
// console.log("Is duck warm? " + duck.warmblooded);
// console.log("name-"+duck.name);    //public var
// console.log("weight-"+duck.weight);//private var this shows undefined. correctly as is out of scope!

function whatsMyParent(objectToCheck, stringToAsk){
    return objectToCheck.constructor.toString().indexOf(stringToAsk) > -1;
}
// console.log("duck is bird? " + whatsMyParent(duck, "Bird")); //should return true;
// console.log("duck Sandwich? " + whatsMyParent(duck, "turDucken"));//expected false;
// console.log(`duck constructor string: ${duck.constructor.toString().indexOf("Bird")}`);
// console.log(duck instanceof Bird); // Easy check if duck is Bird
