Bullet = function(x, y, velx, vely) {
	
	this.pos = new Vector2(x,y);
	this.vel = new Vector2(velx, vely);	
	
	// instead set Vector with speed and rotate
	
	this.enabled = true; 
	
	this.update = function() {
		
		this.pos.plusEq(this.vel); 
		
	};
	
	this.draw = function(c) {
		c.lineWidth =2; 
		c.strokeStyle = "#fff"; 
		c.strokeCircle(this.pos.x, this.pos.y, 2); 
		
	};

	
};