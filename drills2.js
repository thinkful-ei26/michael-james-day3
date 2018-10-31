'use strict';
console.log(function (arr = [{name: 'Jon Ron', grade: 'C'},{name: 'Jony Robony', grade: 'B'},{name: 'Jo Rot', grade: 'A'}]) {return arr.map(index =>`${index.name}: ${index.grade}`);}());
