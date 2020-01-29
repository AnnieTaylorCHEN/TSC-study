//Type annotations: 
// we developers tell Typescript the type

//add a type after ":", if you assign a wrong value type you will see the indication of error
let apples: number = 5
let speed: string = 'fast'
let hasName: boolean = true

let nothingMuch : null = null 
let nothing: undefined = undefined

//Built in objects
let now: Date = new Date()

//Array: put the value in the array first, then type the []
let colors: string[] = ['red,', 'blue', 'green']
let myNumbers: number[] =[1, 2, 3]
let truths: boolean[] =[true, true, false]

//Classes
class Car {

}
let car: Car = new Car()

//Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

//Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

//Type Inference 
//Typescript guesses the type

const sth = 'sth'
//on the left we have type variable declaration and on the right we have variable initiation. When they're are in ONE line, typescript is going to figure it out itself without us writing annotation.

//When to use annotations
// 1. Function that returns the 'any' type
const json ='{"x": 10, "y": 20}'
const coordinates: {x: number; y: number} = JSON.parse(json)
console.log(coordinates)

//Here JSON.parse() doesn't know what type of value will be returned, so it would be any 

//2. When we declare a variable on one line and initialize it later
let words =['red', 'green', 'blue']
let foundWord: boolean
//note in real world we often use let foundWord = false, but here we do this to illustrate the example

for (let i = 0; i < words.length; i ++){
    if (words[i] === 'green'){
        foundWord = true
    }
}


//3. Variable whose type can't be inferred correctly
let numbers = [-10, -1, 12]
let numbersAboveZero : boolean | number = false

for (let i =0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numbersAboveZero = numbers[i]
    }
}
