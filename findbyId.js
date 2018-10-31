'use strict';
/*findById. This function takes 2 arguments, items and idNum.

items is an array of objects.
 idNum is the id we're trying to find in items.
  The function should look for an item with the id idNum in the array items.
   If found, it should return that item.*/

const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];

function findById(items, idNum){
    const found = items.find(element => {
        if (element.id === idNum){
            return element;
        }
    });
    return found;
}

console.log(findById(data, 2));