'use strict';

// students is an array of objects, with each object representing a student — for example, {name: 'Tim', status: 'Current student', course: 'Biology'}.

// enrollInSummerSchool should return an array of objects. 
// For each object from the original array, it should return the original name and course, but should update the status to In Summer school.
const arr =[{name: 'Tim', status: 'Current student', course: 'Biology'},{name: 'Tammy', status: 'Current student', course: 'Computer Science'},{name: 'Tom', status: 'Current student', course: 'Math'}]
function enrollInSummerSchool(students) {

    for (const item in students) {
        // console.log(item);
        // console.log(students[item]);
        students[item].status = "In Summer School";

    }
    
return students;
  
}

console.log(enrollInSummerSchool(arr));