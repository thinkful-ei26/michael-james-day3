'use strict';

const obj = [{name: 'henry', jobTitle: 'Janitor', boss: "Kelly"},{name: 'Kelly', jobTitle: 'Founder', boss: "Self"},{name: 'james', jobTitle: 'programmer', boss: "Kelly"}];   

obj.forEach(element => {
    if(element.jobTitle !== 'Founder'){
        console.log(`${element.jobTitle} ${element.name} reports to ${element.boss}.`);
    } else {
        console.log(`${element.jobTitle} ${element.name} doesn't report to anybody.`);
    }

});