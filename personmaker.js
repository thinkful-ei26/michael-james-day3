'use strict';
// Modify personMaker.fullName to be a function that uses self-reference (via this) in order to return the firstName and lastName properties separated by a space.

// So, for instance, if firstName was 'Jane' and lastName was 'Doe', fullName() should return 'Jane Doe'.


function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      age: 10,
      
      // replace `null` with a function that uses self reference to return
      // full name
      fullName: function () {
        return `${this.firstName} ${this.lastName}`;  
      } ,
      stats: {
       hair: 'brown',
        species: function(){ return this;}
      }


    };
    return person;
  }

  const michael = new Object(personMaker());
  michael.firstName = "michael";
  michael.lastName = "mckay";
  //console.log(michael.fullName);
  console.log(michael.fullName());
  //console.log(michael);
  console.log(michael.stats.species.call(michael));