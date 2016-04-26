//Zkušební kód
//document.write("Ahoj kamarádi")

//Zkušební ES6 kód
 var x = {
   name: "Viléme"
 };

 var y = { //Spread Object direktiva sečte dva objekty
     ...x,
    greeting: "Ahoj"
 }; 

 document.write(y.greeting + " " + y.name);
