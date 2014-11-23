Ship = function(x,y) {

	this.pos = new Vector2(x,y); 
	this.angle = 0; 

	// c = canvas context
	this.draw = function(c) {
		
		c.save();
		c.translate(this.pos.x, this.pos.y); 
		c.rotate(radians(this.angle));

		c.strokeStyle = "#fff"; 
		c.lineWidth = 2; 
		
		c.beginPath();
		c.moveTo(-10, -10);
		c.lineTo(-10, 10);
		c.lineTo(14, 0);
		c.closePath(); 
		c.stroke();
		
		c.restore();		
		
		
	};


}; 