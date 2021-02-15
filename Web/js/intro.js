 $(function(){
        
	var canvas = document.querySelector("#scene"),
		ctx = canvas.getContext("2d"),
		particles = [],
		amount = 0,
		mouse = {x:0,y:0},
		radius = 1;

	var colors = ["#f6416c","#ffde7d", "#00b8a9","white", "#408AF4"];

	var copy = document.querySelector("#copy,#copy2");

	var ww = canvas.width = window.innerWidth;
	var wh = canvas.height = window.innerHeight;

	function Particle(x,y){
		this.x =  Math.random()*ww;
		this.y =  Math.random()*wh/30;
		this.dest = {
			x : x,
			y: y
		};
		this.r =  Math.random()*1.5 + 2;
		this.vx = (Math.random()-0.5)*5;
		this.vy = (Math.random()-0.5)*5;
		this.accX = 0;
		this.accY = 0;
		this.friction = Math.random()*0.015 + 0.94;

		this.color = colors[Math.floor(Math.random()*6)];
	}

	Particle.prototype.render = function() {


		this.accX = (this.dest.x - this.x)/50;//여기//여기
		this.accY = (this.dest.y - this.y)/50;//여기//여기
		this.vx += this.accX;
		this.vy += this.accY;
		this.vx *= this.friction;
		this.vy *= this.friction;

		this.x += this.vx;
		this.y +=  this.vy;

		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
		ctx.fill();

		var a = this.x - mouse.x;
		var b = this.y - mouse.y;

		var distance = Math.sqrt( a*a + b*b );
		if(distance<(radius*70)){
			this.accX = (this.x - mouse.x)/100;
			this.accY = (this.y - mouse.y)/100;
			this.vx += this.accX;
			this.vy += this.accY;
		}

	}

	function onMouseMove(e){
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	}

	function onTouchMove(e){
    if(e.touches.length > 0 ){
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
	}

function onTouchEnd(e){
  mouse.x = -5999;
  mouse.y = -5999;
}

	function initScene(){
		ww = canvas.width = window.innerWidth;
		wh = canvas.height = window.innerHeight;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.font = "bold "+(ww/15)+"px sans-serif";
		ctx.textAlign = "center";
		ctx.fillText(copy.value, ww/2, wh/2);

		var data  = ctx.getImageData(0, 0, ww, wh).data;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.globalCompositeOperation = "screen";

		particles = [];
		for(var i=0;i<ww;i+=Math.round(ww/270)){
			for(var j=0;j<wh;j+=Math.round(ww/300)){
				if(data[ ((i + j*ww)*4) + 3] > 150){
					particles.push(new Particle(i,j));
				}
			}
		}
		amount = particles.length;

	}

	function onMouseClick(){
		radius++;
		if(radius ===5){
			radius = 0;
		}
	}

	function render(a) {
		requestAnimationFrame(render);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (var i = 0; i < amount; i++) {
			particles[i].render();
		}
	};

	copy.addEventListener("keyup", initScene);
	window.addEventListener("resize", initScene);
	window.addEventListener("mousemove", onMouseMove);
	window.addEventListener("touchmove", onTouchMove);
	window.addEventListener("touchend", onTouchEnd);
	initScene();
    requestAnimationFrame(render);
    

    // 클릭하면 인트로박스 위로올라가라.
    $(".intro_click p").click(function(){

        $(".intro_box,.scroll_icon,.logo,.outer-menu,.main_right,.main_left").addClass("on")
    });


    })    
	