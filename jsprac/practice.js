const dcal = document.querySelector("h2#clock");
const christmasEve = new Date("2023-12-24 00:00:00");

function xMasDDay() {
  const today = new Date();
  const dDay = christmasEve - today;
  const perDay = 1000 * 60 * 60 * 24;
  const perHour = 1000 * 60 * 60;
  const perMinute = 1000 * 60;
  const gapDate = Math.floor(dDay / perDay);
  const dHour = dDay - perDay * gapDate;
  const gapHour = Math.floor(dHour / perHour);
  const dMinute = dHour - perHour * gapHour;
  const gapMinute = Math.floor(dMinute / perMinute);
  const gapSecond = Math.floor((dMinute - perMinute * gapMinute) / 1000);
  dcal.innerText = `${gapDate}d ${gapHour}h ${gapMinute}m ${gapSecond}s`;
}

setInterval(xMasDDay, 1000);
