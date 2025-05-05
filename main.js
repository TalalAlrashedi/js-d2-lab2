const characters = [
  ["Luke Skywalker", 177, "male", 77, "brown"],
  ["Leia Organa", 160, "female", 56, "blue"],
  ["Han Solo", 180, "male", 80, "brown"],
  ["Chewie", 222, "male", 190, "black"],
  ["kevien", 106, "male", 32.2, "red"],
];

const properites = characters.map(function (props) {
  return {
    name: props[0],
    heghts: props[1],
    gender: props[2],
    mass: props[3],
    eyeColors: props[4],
  };
});

console.log(properites);

console.log("------------------------------");

let allNames = characters.map(function (names) {
  return names[0];
});

console.log(`names are : ${allNames.join(" ")}`);

console.log("------------------------------");

let Allheights = characters.map(function (heght) {
  return heght[1];
});

console.log(`Heights are : ${Allheights.join(" ")}`);

console.log("------------------------------");

let totalHeights = characters.reduce(function (sum, height) {
  return sum + height[1];
}, 0);

console.log(`total Heights are : ${totalHeights}`);

console.log("------------------------------");

let getHeights = characters.filter(function (height) {
  return height[1] < 200;
});

console.log("short than 200 are", getHeights);

console.log("------------------------------");

let getMale = characters.filter(function (male) {
  return male[2] === "male";
});

console.log("number of male", getMale);

console.log("------------------------------");

let sortedMass = characters.sort(function (a, b) {
  return a[3] - b[3];
});

console.log("sorted  of mass ", sortedMass);

console.log("------------------------------");

let sortedHeight = characters.sort(function (a, b) {
  return a[1] - b[1];
});

console.log("sorted  of height ", sortedHeight);
console.log("------------------------------");

const everyMassOver40 = characters.every(function (character) {
  return character[3] > 40;
});

console.log("mass more than 40 ", everyMassOver40);

console.log("------------------------------");

const charShorterThan200 = characters.every(function (character) {
  return character[1] < 200;
});

console.log(" character shorter than 200 ", charShorterThan200);

console.log("------------------------------");

let blueEyes = characters.some(function (char) {
  return char[4] === "blue";
});

console.log(" has blue? ", blueEyes);

// Is there at least one character taller than 210?

let charHastaller210 = characters.some(function(char){
    return char[1] > 210
})

console.log(" has taller 210? ", charHastaller210);