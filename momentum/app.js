const title = document.querySelector(".hello h1");
// 조건에 해당되는 1가지 요소만 가져옴 //
const title2 = document.querySelector(".hello:nth-child(2) h1");

function handleTitleClick() {
  console.log("title was clicked");
  title.style.color = "red";
}

title.style.color = "blue";
title2.addEventListener("click", handleTitleClick);
