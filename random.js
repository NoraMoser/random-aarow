console.log("hi");

let leftImage = `<p><img class="leftImage" class="imageSwap" src="images/left.png"></p>`;
let rightImage = `<p><img class="rightImage" class="imageSwap" src="images/right.png"></p>`;
let imageArea = document.getElementById("arrowGoesHere");
let body = document.getElementById("wholePage");


body.addEventListener("click", function() {
console.log("you clicked me");
	let random = randomNumber();
	if (random === 0) {
  		// $( "p" ).toggle();
  		imageArea.innerHTML = leftImage;
  	} else {
  		imageArea.innerHTML = rightImage;
  	}


console.log(random);

});

// let images = document.getElementsByClassName('imageSwap');




function randomNumber () {
	let random = Math.floor(Math.random()* 2);
	return random;

}
