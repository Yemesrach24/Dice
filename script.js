function randomNumber() {
  // Generate random numbers for each player
  const random1 = Math.floor(Math.random() * 6) + 1;
  const random2 = Math.floor(Math.random() * 6) + 1;

  // Update images based on random numbers
  $("img.img1").attr("src", `./images/dice${random1}.png`);
  $("img.img2").attr("src", `./images/dice${random2}.png`);

  // Determine and display the winner
  const result = random1 > random2 ? "🙎‍♂️Player 1 wins" : random1 < random2 ? "Player 2 wins 🙎" : "🙎‍♂️Draw!🙎";
  $("h1").text(result);
}
