// Part 1: Growing Pains
// Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.
// Here is the information you have been given:
// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// const PI = 3.1415;
// const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.
// Using this information, your objectives are to:
// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

// Part 2: Thinking Bigger
// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?

// A circle with radius of 5 meters
const radius = 5
// Area is PI times the radius
const pi = 3.1415
const area = 3.1415 * 5 * 5
const minSpace = 0.8
const totalPlants = 20
// totalPlants doubles every week

let week1 = 20 * 2 * 0.8

let week2 = 20 * 4 * 0.8

let week3 = 20 * 8 * 0.8
// 4 16
// 5 32
// 6 64
// 7 128
// 8 256
// 9 512
let week10 = 100 * 1024 * 0.8

//WEEK ONE
if (week1 > area * 0.8){
    console.log (`Wk1 Prune`);
} else if (week1 >= area * 0.5, week1 <= area * 0.8){
    console.log (`Wk1 Monitor`);
} else {
    console.log (`Wk1 Plant`)
}

//WEEK TWO
if (week2 > area * 0.8){
    console.log (`Wk2 Prune`);
} else if (week2 >= area * 0.5, week2 <= area * 0.8){
    console.log (`Wk2 Monitor`);
} else {
    console.log (`Wk2 Plant`)
}

//WEEK THREE
if (week3 > area * 0.8){
    console.log (`Wk3 Prune`);
} else if (week3 >= area * 0.5, week3 <= area * 0.8){
    console.log (`Wk3 Monitor`);
} else {
    console.log (`Wk3 Plant`)
}

//THINKING BIGGER
const morePlants = 100
let newRadius = week10 * radius

if (week10){
    console.log(`Result`, week10, `square meters`)
}

if (morePlants * minSpace){
    console.log(`OVERLOAD!!!`)
}

if (week10 * radius){
    console.log(`New Radius`, newRadius)
}








//INPUTS

// function testFunction(bob){
//         console.log(bob);
// }

// testFunction(5)
// testFunction(`Hello World!`)

//OUTPUTS

// function testFunction(bob){
//     console.log(bob);
//     return 172 
// }

// let x = testFunction(5)
// testFunction(`Hello World!`)
//     console.log (x)

//PRACTICAL FUNCTION

// function double (num){
//     return num * 2
// }

// let x = double(50)
// console.log (x)

// function triple (num){
//     return num * 3
// }

// let x = triple(50)
// console.log (x)

// function remainder (num, bob){
//         return num % bob
// }

// console.log (remainder(5, 2))

