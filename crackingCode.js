'use strict';


const decoderRing = {decode: words => words.split(' ').reduce((accumulator, word) => word.length === 3 ? accumulator + ' ' : accumulator + word[word.length-1].toUpperCase(), '') };
// const decoderRing = words => words.split(' ').reduce((accumulator, word) => word.length === 3 ? accumulator + ' ' : accumulator + word[word.length-1].toUpperCase(), '');



console.log(decoderRing.decode('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));