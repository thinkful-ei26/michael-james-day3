// Spend up to 20 minutes writing a function called validateKeys. This function takes 2 arguments, object and expectedKeys. object is
//  (you guessed it!) an object that we want to validate keys for. expectedKeys is an array of keys that we expect to find on the object.

// validateKeys should return true if object has all of the keys from expectedKeys, and no additional keys. It should return false 
// if one or more of the expectedKeys is missing from the object, or if the object contains extra keys not in expectedKeys.


function vaildateKeys(obj, expectedKeys) {

    //console.log(Object.entries(obj));
    //console.log(typeof expectedKeys);
    
    for (let i=0; i < expectedKeys.length; i++) {
        if(!obj.hasOwnProperty(expectedKeys[i])){
        
           return false;
        }
    }
    if(Object.keys(obj).length != expectedKeys.length){
        
        return false;
    }
    return true;
    
    // if(Object.keys(obj) == expectedKeys){
    //     return true;
    // } else{
    //     return false;
    // }
    
}

const obj = {name:"henry", day:"tomorrow"};

console.log(vaildateKeys(obj, ['name','day', 'money']));