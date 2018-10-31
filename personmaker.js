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
<<<<<<< HEAD
  //console.log(michael.fullName());
  //console.log(michael);



  function objecters() {
    const x = {
      _name : 'michael',
      _name : 'sally',
    }
    return x;
  }

  

  const bob = objecters();
  delete bob._name;
  let myArray = [1,2,3,4,bob];
  console.log(myArray);
  console.log(bob._name);
  console.log(bob);
  console.log(Object.keys(bob));


=======
  console.log(michael.fullName());
  //console.log(michael);
  console.log(michael.stats.species.call(michael));
>>>>>>> e7d53e1dcf6c5198e1aac54630cb7a7961c8cc5d
