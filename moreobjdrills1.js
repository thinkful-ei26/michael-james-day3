'use strict';
const loaf = {
    flour: 300,
    water: 210,
    hydration: function(){
        return (this.water/(this.flour*100));
    }
};
console.log(`loaf's flour is: ${loaf.flour}`);
console.log(`loaf's water is: ${loaf.water}`);
console.log(`hydration is ${loaf.hydration()}`);