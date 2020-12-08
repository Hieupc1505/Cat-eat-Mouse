
function Mouse(name){
	this.name = name; 
	this.dead = 'false'; 
}
Mouse.prototype.eat = function() {
	this.dead = 'true'; 
}; 

module.exports = Mouse; 