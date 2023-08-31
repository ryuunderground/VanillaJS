const _h1_ = document.querySelector(".hello h1");
// 조건에 해당되는 1가지 요소만 가져옴 //
const _h1_2 = document.querySelector(".hello:nth-child(2) h1");
const _h1_3 = document.querySelector(".hello:nth-child(3) h1");

console.dir(_h1_2);

function handle_h1_Click() {
  _h1_.style.color = "red";
}
function handleMouseEnter() {
  _h1_3.innerText = "mouse is here";
}
function handleMouseLeave() {
  _h1_3.innerText = "Mouse was here";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier!!!");
}
function handleWindowOffline() {
  alert("Aidez moi. Il n'y a pas plus de wifi");
}
function handleWindowOnline() {
  alert("Toutes sont bonnes");
}

_h1_.style.color = "blue";
_h1_2.onclick = handle_h1_Click;
_h1_3.onmouseenter = handleMouseEnter;
_h1_3.addEventListener("mouseleave", handleMouseLeave);
_h1_3.addEventListener("click", handle_h1_Click);
_h1_3.removeEventListener("click", handle_h1_Click);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
