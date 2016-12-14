// Adding methods to objects without prototypal inheritance
// var dog = {};
//
// dog.bark = function () { console.log('woof') };
//
// var sparky = {};
//
// spark.bark = function () { console.log('woof') };


// Using this to access properties in the 'sparky' object
// var sparky = {};
//
// sparky.name = 'Sparky';
//
// sparky.bark = function () { console.log(`${this.name} says woof!`) };
//
// sparky.bark();
//
// // How to change the name of the sparky object, which will affect the bark method
// sparky.name = 'Sparkette';
//
// sparky.bark = function () { console.log(`${this.name} says woof!`) };
//
// sparky.bark();
//
//
// // Create an new object which logs its name and age using a speak method
// var tom = {
//   age: 110,
//   name: 'Tom',
//   speak: function() { console.log(`Hi my name is ${this.name} and I am ${this.age} years old.`) }
// };
//
// tom.speak();
//
//
// // Demoing var copying, variables cannot be referenced
// var jacobsAge = 10;
// jacobsAge++;
//
// var jacob = {
//   age: jacobsAge
// }
//
// // Will only increment the var jacobsAge
// jacobsAge++;
//
// // Will only increment the age prop for jacob
// jacob.age++;
//
//
// // Using constructor function
// function Bear (name) {
//   this.name = name;
// };
//
// Bear.prototype.claws = true;
//
// var Yogi = new Bear('Yogi');
//
// console.log("Test Yogi", Yogi);


var Order = function() {
  this.pizzas = [];
  this.beverages = [];
};

var Pizza = function() {
  this.toppings = [];
};

var DeepDish = function() {

};

// The DeepDish's prototype is a new generic Pizza
DeepDish.prototype = new Pizza();
DeepDish.prototype.thickness = 'Deep';

var ThinCrust = function() {

};

ThinCrust.prototype = new Pizza();
DeepDish.prototype.thickness = 'Thin';

var Topping = function() {

};

var Pepperoni = function() {

};

Pepperoni.prototype = new Topping();

var Mushroom = function() {

};

Mushroom.prototype = new Topping();

var Beverage = function() {

};

var Soda = function() {

};

Soda.prototype = new Beverage();

var FruitPunch = function() {

};

FruitPunch.prototype = new Beverage();


//
