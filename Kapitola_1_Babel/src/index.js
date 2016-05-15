//Zkušební kód
//document.write("Ahoj kamarádi")

//Zkušební ES6 kód
var x = [
    "Viléme"
];

var y = [ //Spread Array direktiva sečte dvě pole
    ...x,
    "Ahoj"
];

document.write(y[1] + " " + y[0]);
