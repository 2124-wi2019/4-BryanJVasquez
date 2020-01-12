/*
Bryan Vasquez
Vasquez_a04b.js
INFO 2124
Thoendel
01/10/2020
*/
const firstName = "Bryan";
const weight = "149.0";
let height = 65.1;
let age = "23";
const marsGravity = 0.38;
const inchesToMeters = 2.54;

let ageConverted = parseInt(age);
let mult365 = ageConverted*365;
let marsAge = mult365/687;

let weightConverted = parseFloat(weight);
let marsWeight = weightConverted*marsGravity;


console.log(`Hello there, ${firstName}! On earth you weigh ${Number(weight).toFixed(2)} pounds.
But, since gravity is weaker on the mars, you would only weight ${String(marsWeight)} pounds there!

Neat huh? want to know what else is neat?

Mars takes longer to rotate around the Sun than does Earth. This means the Mars year is actually
longer than our "terran" year. So althought you are ${parseInt(age)} years old on Earth, you're
only ${parseFloat(marsAge).toFixed(2)} years old on Mars.

Did you know, the European Space Agency requires potential astronauts to measure between
153 and 190 cm? Just in case you ever decide to move to Europe and want to be
an astronaut, your height in metric is ${parseFloat(height).toFixed(2)} cm.`);