function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue;
}


var mode="light";


if(getCookie('mode') !=null){
	mode=getCookie('mode');
	if(mode=='light'){
		document.documentElement.style.setProperty('--backgroud_color', '#F3F3F3');
		document.documentElement.style.setProperty('--brightness_logo_color', '#020203');
		document.documentElement.style.setProperty('--txt_black', '#020203');
		document.documentElement.style.setProperty('--social_logo_color', '#020203');
		document.documentElement.style.setProperty('--gray_line', '#C7C7C7');
		document.getElementById('intro_pic').style.opacity='1';
	}else {
		document.documentElement.style.setProperty('--backgroud_color', '#21210f');
		document.documentElement.style.setProperty('--brightness_logo_color', '#c2c2c2');
		document.documentElement.style.setProperty('--txt_black', '#c2c2c2');
		document.documentElement.style.setProperty('--social_logo_color', '#313131');
		document.documentElement.style.setProperty('--gray_line', '#313131');
		document.getElementById('intro_pic').style.opacity='0.6';
	}
}


function hover_over_hire_me_svg() {
    document.getElementById('Sad').style="display: none;";
    document.getElementById('Smile').style="display: block;";
}

function mouse_leave_hire_me_svg() {
    document.getElementById('Smile').style="display: none;";
    document.getElementById('Sad').style="display: block;";
}


function toogleMode(){
	if(mode=="light"){
		document.documentElement.style.setProperty('--backgroud_color', '#21210f');
		document.documentElement.style.setProperty('--brightness_logo_color', '#c2c2c2');
		document.documentElement.style.setProperty('--txt_black', '#c2c2c2');
		document.documentElement.style.setProperty('--social_logo_color', '#313131');
		document.documentElement.style.setProperty('--gray_line', '#313131');
		document.getElementById('intro_pic').style.opacity='0.6';
		mode="dark";
		setCookie('mode', 'dark', 360);
	}
	else {
		document.documentElement.style.setProperty('--backgroud_color', '#F3F3F3');
		document.documentElement.style.setProperty('--brightness_logo_color', '#020203');
		document.documentElement.style.setProperty('--txt_black', '#020203');
		document.documentElement.style.setProperty('--social_logo_color', '#020203');
		document.documentElement.style.setProperty('--gray_line', '#C7C7C7');
		document.getElementById('intro_pic').style.opacity='1';
		mode="light";
		setCookie('mode', 'light', 360);
	}
}


function showWelcome(){
	document.getElementById('body_div2').setAttribute('hidden',"True");
	document.getElementById('body_div3').setAttribute('hidden',"True");
	document.getElementById('body_div4').setAttribute('hidden',"True");
	document.getElementById('body_div').removeAttribute('hidden');
}
function showResume(){
	document.getElementById('body_div').setAttribute('hidden',"True");
	document.getElementById('body_div3').setAttribute('hidden',"True");
	document.getElementById('body_div4').setAttribute('hidden',"True");
	document.getElementById('body_div2').removeAttribute('hidden');
}

function showContacts(){
	document.getElementById('body_div2').setAttribute('hidden',"True");
	document.getElementById('body_div').setAttribute('hidden',"True");
	document.getElementById('body_div4').setAttribute('hidden',"True");
	document.getElementById('body_div3').removeAttribute('hidden');
}

function showPortfolio(){
	document.getElementById('body_div2').setAttribute('hidden',"True");
	document.getElementById('body_div').setAttribute('hidden',"True");
	document.getElementById('body_div3').setAttribute('hidden',"True");
	document.getElementById('body_div4').removeAttribute('hidden');
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function setCookies(val){
	var xhttp = new XMLHttpRequest();
    var url = '/trainrf/';
    var csrftoken = getCookie('csrftoken');
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var resp = JSON.parse(xhttp.responseText);
		}
	}
	xhttp.open("post", url, true);
    xhttp.setRequestHeader("X-CSRFToken", csrftoken);
    xhttp.send();
}

// --------------------------Particle Animation--------------------------//
	var w, h, loopId, id, canvas, ctx, particles;

	var options = {
		particleColor: "rgba(255,255,255)",
		lineColor: "rgba(0,181,255)",
		particleAmount: 80,
		defaultRadius: 1,
		variantRadius: 2,
		defaultSpeed: 0.2,
		variantSpeed: 0.1,
		linkRadius: 150
	};

	var rgb = options.lineColor.match(/\d+/g);

	document.addEventListener("DOMContentLoaded", init);

	function init() {
		canvas = document.getElementById("canvas");
		ctx = canvas.getContext("2d");
		resizeReset();
		initialiseElements();
		startAnimation();
	}

	function resizeReset() {
		w = canvas.width = window.innerHeight;
		h = canvas.height = window.innerHeight;
	}

	function initialiseElements() {
		particles = [];
		for (var i = 0; i < options.particleAmount; i++) {
			particles.push(new Particle());
		}
	}

	function startAnimation() {
		loopId = requestAnimationFrame(animationLoop);
	}

	function animationLoop() {
		ctx.clearRect(0,0,w,h);
		drawScene();

		id = requestAnimationFrame(animationLoop);
	}

	function drawScene() {
		drawLine();
		drawParticle();
	}

	function drawParticle() {
		for (var i = 0; i < particles.length; i++) {
			particles[i].update();
			particles[i].draw();
		}
	}

	function drawLine() {
		for (var i = 0; i < particles.length; i++) {
			linkPoints(particles[i], particles);
		}
	}

	function linkPoints(point, hubs) {
		for (var i = 0; i < hubs.length; i++) {
			var distance = checkDistance(point.x, point.y, hubs[i].x, hubs[i].y);
			var opacity = 1 - distance / options.linkRadius;
			if (opacity > 0) {
				ctx.lineWidth = 0.5;
				ctx.strokeStyle = 'rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+','+opacity+')';
				ctx.beginPath();
				ctx.moveTo(point.x, point.y);
				ctx.lineTo(hubs[i].x, hubs[i].y);
				ctx.closePath();
				ctx.stroke();
			}
		}
	}

	function checkDistance(x1, y1, x2, y2) {
		return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	}

	Particle = function() {
		var _this = this;

		_this.x = Math.random() * w;
		_this.y = Math.random() * h;
		_this.color = options.particleColor;
		_this.radius = options.defaultRadius + Math.random() * options.variantRadius;
		_this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
		_this.directionAngle = Math.floor(Math.random() * 360);
		_this.vector = {
			x: Math.cos(_this.directionAngle) * _this.speed,
			y: Math.sin(_this.directionAngle) * _this.speed
		}

		_this.update = function() {
			_this.border();
			_this.x += _this.vector.x;
			_this.y += _this.vector.y;
		}

		_this.border = function() {
			if (_this.x >= w || _this.x <= 0) {
				_this.vector.x *= -1;
			}
			if (_this.y >= h || _this.y <= 0) {
				_this.vector.y *= -1;
			}
			if (_this.x > w) _this.x = w;
			if (_this.y > h) _this.y = h;
			if (_this.x < 0) _this.x = 0;
			if (_this.y < 0) _this.y = 0;
		}

		_this.draw = function() {
			ctx.beginPath();
			ctx.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fillStyle = _this.color;
			ctx.fill();
		}
	}

// --------------------------Particle Animation--------------------------//