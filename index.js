

const mouse = require('./Mouse.js'); 
const cat = require('./cat.js'); 
var jicky = new cat('jicky'); 
var tom = new mouse('trang'); 

jicky.eat(tom); 
console.log(jicky); 