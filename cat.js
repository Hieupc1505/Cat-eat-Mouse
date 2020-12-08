const Mouse = require('./Mouse'); 
function Cat (name){
	this.name = name,
	this.stomach = []
}
Cat.prototype.eat = function(Mouse){
	Mouse.eat(); 
	this.stomach.push(Mouse); 
}
module.exports = Cat; 