ShipMoving = function(x,y) {


	this.pos = new Vector2(x,y); 
	this.angle = 0; 
	this.vel = new Vector2(0,0); 
	this.temp = new Vector2(0,0); 
	
	this.thrustPower = 0.1; 
	this.rotateSpeed = 4; 
	
	this.thrustSize = 0; 
	
	var counter = 0; 

	this.update = function() {
		this.pos.plusEq(this.vel);
		 
		if(this.thrustSize>0) this.thrustSize--; 
	
	};
	
	this.thrust = function() {
		
		this.temp.reset(this.thrustPower,0); 

		this.temp.rotate(this.angle); 
		this.vel.plusEq(this.temp); 
		if(this.thrustSize<16) this.thrustSize+=2; 
	};
	
	this.rotateLeft = function() {
		this.angle -= this.rotateSpeed; 
	};
	this.rotateRight = function() {
		this.angle += this.rotateSpeed; 
	};
	
	
	// c = canvas context
	this.draw = function(c) {		
		
		c.save();
		c.translate(this.pos.x, this.pos.y); 
		c.rotate(this.angle * Vector2Const.TO_RADIANS);

		c.strokeStyle = "#fff"; 
		c.lineWidth = 2; 
		
		c.beginPath();
		c.moveTo(-10, -10);
		c.lineTo(-10, 10);
		c.lineTo(14, 0);
		c.closePath(); 
		c.stroke();
		
		
		
		if(this.thrustSize>0) {

			c.beginPath();
			c.moveTo(-10, -6);
				
			c.lineTo(-10 - (this.thrustSize/((counter%2)+1)) , 0);
			
			c.lineTo(-10, 6);
			//c.closePath(); 
			c.stroke();
			counter++; 
		}
		
		c.restore();
		
		//draw velocity vector 
		// c.save(); 
		// 	c.strokeStyle = "#f00"; 
		// 	c.lineWidth = 2;
		// 	
		// 	c.translate(this.pos.x, this.pos.y); 
		// 	c.beginPath(); 
		// 	c.moveTo(0,0); 
		// 	c.lineTo(this.vel.x*10, this.vel.y*10);
		// 	c.stroke(); 
		
		
		
		
		c.restore();		

		
		
	};


}; 