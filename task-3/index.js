var i = 0;
var j = 0;
alert("Music and sounds included, use headset.")
function show(a){
	let x = document.getElementById('clk');
	let y = document.getElementById('win');
	let z = document.getElementById('lose');
	x.play();
	document.getElementById('d').innerHTML = "<h5>You</h5><img src='images/"+a+".png' height='90%' width='90%'>"
	var b = Math.floor((Math.random()*3)+1);
	document.getElementById('e').innerHTML = "<h5>Computer</h5><img src='images/"+b+".png' height='90%' width='90%'>"
	document.getElementById('fd').innerText="";
	document.getElementById('fb').innerText = i;
	document.getElementById('fc').innerText = j;
	if(a>b){
		if(a==3 && b==1){
			j++;
			document.getElementById('fa').innerText="You Lost "
			document.getElementById('fc').innerText = j;
		}
		else{
			i++;
			document.getElementById('fa').innerText="You Won "
			document.getElementById('fb').innerText = i;
		}
	}
	else if(a==b){
		document.getElementById('fa').innerText="Tie"
		document.getElementById('fb').innerText = i;
		document.getElementById('fc').innerText = j;
	}
	else{
		if(a==1 && b==3){
			i++;
			document.getElementById('fa').innerText="You Won "
			document.getElementById('fb').innerText = i;
		}
		else{
			j++;
			document.getElementById('fa').innerText="You Lost "
			document.getElementById('fc').innerText = j;
		}
	}
	if(i==5){
		y.play();
		document.getElementById('fd').innerText="You Wins";
		i=0;
		j=0;
	}
	else if(j==5){
		z.play();
		document.getElementById('fd').innerText="Computer Wins, You Lost";
		i=0;
		j=0;
	}
}