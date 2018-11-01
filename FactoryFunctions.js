'use strict';
// function MiddleEarthPPL(){ }

// MiddleEarthPPL.prototype = {
//     constructor: MiddleEarthPPL,
//     equip: function(weaponString){
//         return this.weapon = weaponString;
//     }
// };

function CreateCharacter(name, nickname, race, origin, attack, defense){
    return {
        name, nickname, race, origin, attack, defense,
        describe: function(){
            console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
        },
        evaluateFight: function(charObj){//reminder 0 damage if error line 10
            return `Your opponent takes ${((charObj.defense>this.attack)? '0':this.attack - charObj.defense)} damage   
             and you receive ${((this.defense>charObj.attack)?'0':charObj.attack - this.defense)} damage.`;
        }
    };
}

//CreateCharacter.prototype = MiddleEarthPPL.prototype;
//CreateCharacter.prototype.constructor = CreateCharacter;
//console.log(CreateCharacter.prototype);
CreateCharacter.prototype.equip = function(weaponString){
    return this.weapon = weaponString;
};
const Gandalf = new CreateCharacter('Gandalf', 'G Dog Whitey', 'Wizard', 'Middle Earth', 10, 6);
const BilboBaggins = new CreateCharacter('Bilbo Baggins', 'G bilbo bagsies', 'Hobbit', 'The Shire', 2, 1);
const FrodoBaggins = new CreateCharacter('Frodo', 'Frodo the Froyo', 'Hobbit', 'The Shire', 3, 2);
const Aragorn = new CreateCharacter('Aragorn son of Arathorn', 'Aragorn', 'Man', 'Dunnedain', 6, 8);
const Legolas = new CreateCharacter('Legolas', 'Legolas', 'Elf', 'Woodland Realm', 8, 5);
Gandalf.prototype = CreateCharacter.prototype;
//Using array literal syntax, create an array characters that calls your factory function for each character in the table
// above with the relevant parameters. Your characters array should now have 5 objects in it
const characters = [];
characters.push(Gandalf, BilboBaggins, FrodoBaggins, Aragorn, Legolas);

//Arwen Undomiel is a Half-Elf of Rivendell
const Arwen = new CreateCharacter('Arwen Undomiel', 'Arwen', 'Half-Elf', 'Rivendell', 8, 5);
characters.push(Arwen);
//console.log(characters);

//console.log(Gandalf.weapon);
//console.log(`this should be wizard staff -- ${Gandalf.weapon}`);
//characters.find(index => {if(index.nickname === 'Aragorn'){index.describe();}});
//Aragorn.describe();
 //console.log(Gandalf.evaluateFight(BilboBaggins));
// console.log("Versus");
// console.log(BilboBaggins.evaluateFight(Gandalf));
const hobbits = characters.filter(index => index.race==='Hobbit');
//console.log(hobbits);
const attackHigh = characters.filter(index => index.attack>5);
//console.log(attackHigh);
// CreateCharacter.prototype.equip = function(string){
//     this.weapon = string;
// };
//Gandalf.equipt();
//Gandalf.prototype.equip("wizard staff");

Gandalf.prototype.equip("What???");

console.log(Gandalf.prototype.weapon);
//console.log(CreateCharacter.constructor.toString());
