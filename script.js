function randomnumber()
{
    //for the first player 
  random1 =  Math.floor(Math.random()*6 ) ;

  if (random1===0){
document.querySelector("img.img1").setAttribute("src", "./images/dice1.png");
  }
  else if (random1===1){
   document.querySelector("img.img1").setAttribute("src", "./images/dice2.png");
  }
  else if (random1===2){
   document.querySelector("img.img1").setAttribute("src", "./images/dice3.png");
  }
  else if (random1===3){
    document.querySelector("img.img1").setAttribute("src", "./images/dice4.png");
  }
  else if (random1===4){
    document.querySelector("img.img1").setAttribute("src", "./images/dice5.png");
  }
  else  {
    document.querySelector("img.img1").setAttribute("src", "./images/dice6.png");
  }
  
  //for 2nd player 
   random2 =  Math.floor(Math.random()*6 ) ;

  if (random2===0){
document.querySelector("img.img2").setAttribute("src", "./images/dice1.png");
  }
  else if (random2===1){
   document.querySelector("img.img2").setAttribute("src", "./images/dice2.png");
  }
  else if (random2===2){
   document.querySelector("img.img2").setAttribute("src", "./images/dice3.png");
  }
  else if (random2===3){
    document.querySelector("img.img2").setAttribute("src", "./images/dice4.png");
  }
  else if (random2===4){
    document.querySelector("img.img2").setAttribute("src", "./images/dice5.png");
  }
  else  {
    document.querySelector("img.img2").setAttribute("src", "./images/dice6.png");
  }
  

// for displaying the winner 
if (random1>random2){
    document.querySelector("h1").textContent=("🙎‍♂️Player 1 win!");
}
else if (random1<random2) {
    document.querySelector("h1").textContent=("Player 2 win! 🙎");
}
else {
    document.querySelector("h1").textContent=("🙎‍♂️Draw!🙎");
}
}

randomnumber();
