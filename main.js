'use strict';
// In this drill, you need to write code for the createMyObject function so that it returns an object with the following key value pairs:

// foo => 'bar'
// answerToUniverse => 42
// olly olly => 'oxen free'
// sayHello => a function that returns the string 'hello'


// 
const objectCreator = () => new Object({ foo: 'bar', answerToUniverse: 42, 'olly olly': 'oxen free', sayHello: () => 'hello' });


function updateObject(obj){
    return (obj.foo = 'foo', obj.bar = 'bar', obj.bizz = 'bizz', obj.bang = 'bang');
}



const myTestObj = Object.assign(objectCreator());
const myTestObj2 = objectCreator();

console.log(`myfirst object is set to: ${(myTestObj.foo)}`);
console.log(`mysecond object is set to: ${Object.keys(myTestObj2)}`);

updateObject(myTestObj);
updateObject(myTestObj2);

console.log(`object is updated to: ${myTestObj.foo}`);
console.log(`mysecond object is updated to: ${Object.keys(myTestObj2)}`);



// Modify the updateObject function (which takes a single argument (obj)) so that it adds the following key/value pairs to obj and returns it:

// foo => 'foo'
// bar => 'bar'
// bizz => 'bizz'
// bang => 'bang'

