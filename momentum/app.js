const player = {
  name: "ryu",
  age: 25,
  smart: true,
  sayHello: function (otherPersonsName) {
    console.log("Hello! " + otherPersonsName);
  },
};

console.log(player.name);
player.sayHello("underground");
player.sayHello("Hong");
