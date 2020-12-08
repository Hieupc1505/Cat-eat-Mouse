const mouse = require('./Mouse.js'); 
const cat = require('./cat.js'); 
const Dog = require('./Dog.js'); 

var jicky = new cat('jicky'); 
var tom = new mouse('trang'); 
var gau = new Dog('den'); 
try{
	jicky.eat(gau); 
}catch(Error){
	console.log('Have error while cat eating a dog'); 
}

console.log(jicky); 