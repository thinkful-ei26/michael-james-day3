// In this drill, you need to write code for the createMyObject function so that it returns an object with the following key value pairs:

// foo => 'bar'
// answerToUniverse => 42
// olly olly => 'oxen free'
// sayHello => a function that returns the string 'hello'


function objectCreator() {
    return { foo: 'bar', answerToUniverse: 42, 'olly olly': 'oxen free', sayHello: () => 'hello' };
}

console.log(objectCreator());

//const obj = Object.assign(objectCreator());
