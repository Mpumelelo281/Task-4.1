// Exercise 1: Rounding Numbers
const num1 = 4.789;
const num2 = 12.345;
const num3 = -8.5;

console.log("1.1 Rounded num1:", Math.round(num1));           // → 5
console.log("1.2 Floor of num2:", Math.floor(num2));           // → 12
console.log("1.3 Ceil of num3:", Math.ceil(num3));             // → -8

// Exercise 2: Finding Min and Max
const numberSet = [14, 2, -5, 101, 35, 8];

console.log("2.1 Max number:", Math.max(...numberSet));        // → 101
console.log("2.2 Min number:", Math.min(...numberSet));        // → -5

// Exercise 3: Powers and Square Roots
const base = 5;
const exponent = 3;
const numberForSqrt = 64;

console.log("3.1 5^3:", Math.pow(base, exponent));             // → 125
console.log("3.2 √64:", Math.sqrt(numberForSqrt));             // → 8

// Exercise 4: Random Numbers
console.log("4.1 Random decimal (0-1):", Math.random());       // → random between 0 and 1
console.log("4.2 Random int (1-10):", Math.floor(Math.random() * 10) + 1); // → 1 to 10

// Exercise 5: Circle Calculations
const radius = 7;
const area = Math.PI * Math.pow(radius, 2);

console.log("5.1 Circle area:", area);                         // → ~153.938
console.log("5.2 Area rounded:", area.toFixed(2));             // → 153.94
