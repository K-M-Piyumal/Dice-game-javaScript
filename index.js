var randomNumber1 = Math.floor((Math.random()*6) + 1);
var randomNumber2 = Math.floor((Math.random()*6) + 1);
var str = "images/dice" + randomNumber1 + ".png";
var str2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", str);
document.querySelector(".img2").setAttribute("src", str2);

if(randomNumber1 > randomNumber2){ 
    document.querySelector("h1").innerHTML = "🚩Player1 wins!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 wins!🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}
