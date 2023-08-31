const title = document.querySelector(".hello h1");
// 조건에 해당되는 1가지 요소만 가져옴 //
const title2 = document.querySelector(".hello:nth-child(2) h1");
const title3 = document.querySelector(".hello:nth-child(3) h1");

console.dir(title2);
function handleTitleClick() {
  console.log("title was clicked");
  title.style.color = "red";
}
function handleMouseEnter() {
  title3.innerText = "mouse is here";
}
function handleMouseLeave() {
  title3.innerText = "Mouse was here";
}
title.style.color = "blue";
title2.addEventListener("click", handleTitleClick);
title3.addEventListener("mouseenter", handleMouseEnter);
title3.addEventListener("mouseleave", handleMouseLeave);
