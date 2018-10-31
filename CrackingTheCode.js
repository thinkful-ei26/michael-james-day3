'use strict';
//Your input is 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'
let inputString = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
// expected  =    'NO NEED TO SHOUT';

//You will need to convert the input to an array before using .reduce()
inputString = inputString.split(" ");

let myTargetString = inputString.reduce(combine);


 function combine(acc, cur, idx){
   
    if(idx === 1){
       
        acc = acc[acc.length -1].toUpperCase();
        
    }
    if(cur.length === 3){       // If the array element is exactly three characters in length
        acc += " ";             // add a space character to your accumulator
    }
    else {                      //  Otherwise,
        acc += cur[cur.length -1].toUpperCase();    //capitalize the LAST character of the array element and add it to your accumulator
    }
    return acc;
 }

 console.log(myTargetString);

//HINT: When you invoke reduce() you will need to set the initialValue parameter to an empty string so that future iterations can concatenate more string characters.. ummm */