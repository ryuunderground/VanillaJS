const formNums = document.querySelector(".game");
const limNum = formNums.querySelector(".limnum");
const pNum = formNums.querySelector(".pnum");
const rexultBox = document.querySelector("div");
const result = rexultBox.querySelector("h3");
const winner = rexultBox.querySelector("span");
const again = rexultBox.querySelector("button");

function reset() {
  location.reload();
}

function gamestart(event) {
  event.preventDefault();
  const limit = parseInt(limNum.value);
  const player = parseInt(pNum.value);
  const ranNum = parseInt(Math.ceil(Math.random() * limit));
  console.log(limit);
  console.log(player);
  console.log(ranNum);
  rexultBox.classList.remove("unseen");
  result.innerText = `You chose: ${player}, the machine chose: ${ranNum}`;
  if (player === ranNum) {
    winner.innerText = "";
    winner.innerText = "You win!!!";
    again.classList.remove("unseen");
    again.addEventListener("click", reset);
  } else {
    winner.innerText = "You lose";
  }
}

formNums.addEventListener("submit", gamestart);
