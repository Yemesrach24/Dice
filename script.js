function randomnumber()
{
    //for the first player 
  random1 =  Math.floor(Math.random()*6 ) ;

  if (random1 === 0) {
    $("img.img1").attr("src", "./images/dice1.png");
  } else if (random1 === 1) {
    $("img.img1").attr("src", "./images/dice2.png");
  } else if (random1 === 2) {
    $("img.img1").attr("src", "./images/dice3.png");
  } else if (random1 === 3) {
    $("img.img1").attr("src", "./images/dice4.png");
  } else if (random1 === 4) {
    $("img.img1").attr("src", "./images/dice5.png");
  } else {
    $("img.img1").attr("src", "./images/dice6.png");
  }
  
  //for 2nd player 
   random2 =  Math.floor(Math.random()*6 ) ;
   if (random2 === 0) {
    $("img.img2").attr("src", "./images/dice1.png");
  } else if (random2 === 1) {
    $("img.img2").attr("src", "./images/dice2.png");
  } else if (random2 === 2) {
    $("img.img2").attr("src", "./images/dice3.png");
  } else if (random2 === 3) {
    $("img.img2").attr("src", "./images/dice4.png");
  } else if (random2 === 4) {
    $("img.img2").attr("src", "./images/dice5.png");
  } else {
    $("img.img2").attr("src", "./images/dice6.png");
  }
  
  // Determine the winner and update the <h1> text
  if (random1 > random2) {
    $("h1").text("🙎‍♂️Player 1 wins");
  } else if (random1 < random2) {
    $("h1").text("Player 2 wins 🙎");
  } else {
    $("h1").text("🙎‍♂️Draw!🙎");
  }

randomnumber();
