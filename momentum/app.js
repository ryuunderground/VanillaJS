const player = {
  name: "Ryu",
  points: 12,
  smart: false,
};

console.log(player);
console.log(player.points);
player.points = player.points + 25;
console.log(player["name"]);
console.log(player.points);

player.smart = true;
console.log(player);

player.lastName = "potato";
console.log(player);
