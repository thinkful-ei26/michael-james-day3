const obj = {
    foo:'foo',
    bar:'bar',
    fum:'fum',
    quux: 'quux',
    spam: 'spam',
}


for (const key in obj) {
    console.log(key,obj[key]);
}