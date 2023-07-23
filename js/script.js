//text change
function textChange(){	
	document.getElementById('h2').innerHTML = "Hello There!";

}


//show date
function showDate(){	
	document.getElementById('dh2').innerHTML = Date;

}

// on & off
function bc(){
	document.getElementById('ts').src = 'img/2.png';
}
function bw(){
	document.getElementById('ts').src = 'img/1.png';
}

// variable repeat

function dataRepeat(){
	var message ="Welcome to ss";
	document.getElementById('dr').innerHTML = message.repeat(3);
}

// on & off
function bulbOn(){
	document.getElementById('bulb').src = 'img/on.gif';
}
function bulbOff(){
	document.getElementById('bulb').src = 'img/off.gif';
}


// fontsize

function fontSize(){
	document.getElementById('fs').style.fontSize = "50px";
}

// show/hide
function textShow(){
	document.getElementById('tsh').style.display ="block";

}
function textHide(){
	document.getElementById('tsh').style.display ="none";
}


function plus(){
document.getElementById("pp").innerHTML = 10 + 13;
}


