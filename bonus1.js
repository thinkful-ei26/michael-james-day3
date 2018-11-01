'use strict';
const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query){
    //case 1 query 
    if(Object.keys(query).length === 1){
        for(let i=0; i<arr.length; i++){
            if(Object.values(arr[i]).toString().indexOf(Object.values(query).toString())> -1){
              //this works
                return arr[i];
            }
        }
    }
    else if(Object.keys(query).length === 2){
        //case 2 query
        for(let i=0; i<arr.length; i++){
            if((Object.values(arr[i]).toString().indexOf(Object.values(query)[0].toString())> -1) && (Object.values(arr[i]).toString().indexOf(Object.values(query)[1].toString())> -1)){
                return arr[i];
                }
            }
    } else if(Object.keys(query).length === 3){
        //case 3 query
        for(let i=0; i<arr.length; i++){
        if((Object.values(arr[i]).toString().indexOf(Object.values(query)[0].toString())> -1) && (Object.values(arr[i]).toString().indexOf(Object.values(query)[1].toString()) > -1) && (Object.values(arr[i]).toString().indexOf(Object.values(query)[2].toString())> -1)){
            return arr[i];
        }
        }
    }
    console.log("Match not Found.. :(");
    return null;
}
const targetObj = { id: 7, name: 'Hulk', squad: 'Avengers' };
console.log(findOne(HEROES, targetObj));
// findOne(HEROES, { id: 1 });
// //=> { id: 1, name: 'Captain America', squad: 'Avengers' }
 //findOne(HEROES, { id: 10 });
// //=> null
console.log(findOne(HEROES, { id: 6, name: 'Aquaman' }));
// //=> null
// findOne(HEROES, { id: 5, squad: 'Justice League' });
// //=> { id: 5, name: 'Wonder Woman', squad: 'Justice League' }
console.log(findOne(HEROES, { id: 4, name: 'Superman', squad: 'Justice League'}));
// //=> { id: 4, name: 'Superman', squad: 'Justice League' }