var bird;
var pipes = [];

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
new Audio("https://cf-media.sndcdn.com/EJmPy9XCVhW5.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vRUptUHk5WENWaFc1LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1MTMyNjM1NTR9fX1dfQ__&Signature=Mq8n8NxvnbTJE83wcw1uyis5TsVig8fA7NZ0onrX7czQPXlDNYOaTHkpavWvb12TDg0A3EjBzQ0nAG3~yc6c6ve59aMXXvetLWyaDbsKfeoOv4-zbxJ5VjhnJV0us~7ucFCrL0hTDEnCmL5-w3dSlgHY84RTXC5X2c0-JcYPBtdBkFR6DCVO~-mLp4yiQrOT1PoYHNn-ZIadW~g4SmCMIRnuPO3eZ8DgR9XUObBrUgNsoVGqSVzjes~GNevhDg~P2W4SXet1Pjz6Qt9Xbzk1k438VscvADjNZt98vLwh3SA3HMlli7kGueDIgctGZEsR7fN89HxXIxuwPw8FimoPmA__&Key-Pair-Id=APKAJAGZ7VMH2PFPW6UQ").play();
img = loadImage("https://raw.githubusercontent.com/gtor1223/pubggod/gh-pages/sunset-colorful-sky-cove-sea-colors-pc-wallpaper-1920x1080.jpg")
}

function draw() {
  background(0);
  
  image(img,0,0,400,600);
	
		var millisecond = millis();
text("Milliseconds \nrunning: \n" + millisecond, 5, 40);
  
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
	var color_4;
  color_4 = random([1],[255]);
  var color_5;
  color_5 = random([1],[255]);
  var color_6;
  color_6 = random([1],[255]);
			fill(color_4,color_5,color_6)
			textSize(50)
			text("GAME OVER",48,300)
			textSize(35)
			text("Refresh to play again!",30,350)
      document.location.freeze()
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
	
}
function mousePressed() {
  if (key == '') {
    bird.up();
    //console.log("SPACE");
  }
}

function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;

  this.show = function() {
    
    triangle()
     var color_1;
  color_1 = random([1],[255]);
  var color_2;
  color_2 = random([1],[255]);
  var color_3;
  color_3 = random([1],[255]);
		fill(color_1,color_2,color_3)
    ellipse(this.x, this.y, 32, 32);
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}

function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 2;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}