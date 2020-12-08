const Mouse = require('./Mouse'); 

function Cat (name){
	this.name = name,
	this.stomach = []
}
Cat.prototype.eat = function(animal){
	if(animal instanceof Mouse){
	animal.eat(); 
	this.stomach.push(animal);
	}
	 else {
	 	throw new Error('Have some error in your code'); 
	 }
}

module.exports = Cat; 