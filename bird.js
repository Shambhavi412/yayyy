/*class Bird {
    constructor(x,y,width,height){
    
        var options = {
            'restitution' : 0.8,
            'friction' : 0.3,
            'density' : 1.0
    
    
        }
    
    
    this.body = Bodies.rectangle(x,y,50,50,options);
     this.width = 50;
     this.height =50;
    
    World.add(world,this.body);
    }
    
    display()
    {

    
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(9)
    stroke("green");
    fill(255);
    rect(0,0,this.width,this.height);
    pop();
    
     
    
    }
    
    
    }; */
    class Bird {
        constructor(x, y) {
          var options = {
            'density':1.5,
            'friction': 1.0,
            'restitution':0.5
          };
          this.body = Bodies.rectangle(x, y, 50, 50, options);
          this.width = 50;
          this.height = 50;
          World.add(world, this.body);
        };
        display(){
          var pos = this.body.position;
         // pos.x = mouseX;
          pos.y = mouseY;
          var angle = this.body.angle;
      
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          strokeWeight(3);
          stroke('blue')
          fill('red')
          rectMode(CENTER)
          rect(0,0, this.width, this.height);
          pop();
        }
      };
      