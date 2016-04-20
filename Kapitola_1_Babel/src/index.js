var x = {
  name: "Viléme"
};

var y = {
    ...x,
    greeting: "Ahoj"
};

document.write(y.greeting + " " + y.name);
