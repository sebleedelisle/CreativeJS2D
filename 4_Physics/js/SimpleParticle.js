
function Particle(posx, posy) {
	
	// the position of the particle
	this.pos = new Vector2(posx, posy); 
	 
	// the velocity 
	this.vel = new Vector2(0,0); 
	 

	// multiply the particle size by this every frame
	this.shrink = 1; 
	this.size = 1; 

	// multiply the velocity by this every frame to create
	// drag. A number between 0 and 1, closer to one is 
	// more slippery, closer to 0 is more sticky. values
	// below 0.6 are pretty much stuck :) 
	this.drag = 1; 

	// add this to the yVel every frame to simulate gravity
	this.gravity = 0; 

	// current transparency of the image
	this.alpha = 1; 
	// subtracted from the alpha every frame to make it fade out
	this.fade = 0; 

	this.enabled = true; 
	this.life = 0;
	
	this.reset = function(px, py) {
			// the position of the particle
		this.pos.reset(px, py); 
	
		// the velocity 
		this.vel.reset(0,0); 
	
	
		// multiply the particle size by this every frame
		this.shrink = 1; 
		this.size = 1; 
	
		// multiply the velocity by this every frame to create
		// drag. A number between 0 and 1, closer to one is 
		// more slippery, closer to 0 is more sticky. values
		// below 0.6 are pretty much stuck :) 
		this.drag = 1; 
	
		// add this to the yVel every frame to simulate gravity
		this.gravity = 0; 
	
		// current transparency of the image
		this.alpha = 1; 
		// subtracted from the alpha every frame to make it fade out
		this.fade = 0; 
	
		this.enabled = true; 
		this.life = 0;
	}; 
	
	
	this.update = function() {
	
		// simulate drag
		this.vel.multiplyEq(this.drag); 
		
		// add gravity force to the y velocity 
		this.vel.y += this.gravity; 
		
		// and the velocity to the position
		this.pos.plusEq(this.vel);
		
		// shrink the particle
		this.size *= this.shrink;
		
		// and fade it out
		this.alpha -= this.fade; 
		this.life++; 
		if(this.life>50) this.enabled = false; 
	 
	};
	
	this.render = function(c) {
		c.save(); 
		c.translate(this.pos.x, this.pos.y); 
		c.rotate(Math.PI/4); 
		// set the fill style to have the right alpha
		c.strokeStyle = "rgba(255,255,255,"+this.alpha+")";
		c.lineWidth = 0.8;
		
		// draw a circle of the required size
		c.beginPath(); 
		c.moveTo(-this.size, 0);
		c.lineTo(this.size, 0); 
		c.moveTo(0, -this.size);
		c.lineTo(0, this.size); 
		c.stroke();
		
		//c.strokeRect(-this.size, -this.size, this.size*2, this.size*2);
		c.restore();
	};


}
