//this basically means that x can only accept number type of value
let x: number = 3;

let person: string = "Gokul";

let nothing: null = null;

//built in object
let now: Date = new Date();

let colors: string[] = ["g", "sd"];


//classes

class Car {

}

let car: Car = new Car();

//object literal
let point: { x: number, y: number } = {
    x: 10,
    y: 20
}

//function
const addNumber: (x: number, y: number) => void = (x, y) => {
    console.log(x+y);
}

addNumber(2, 3);

//when variable declaration and intialization happen at the
//same line type inference happens wherein ts will try to find the type of value that 
//will be assigned to the variable


//when a function return any type
const json = `{"x": 10, "y":20}`;
//coordinates is of any type
const coordinates = JSON.parse(json);

const numbers: number[] = [1, 2, 3, 4, 5];
let value: (boolean | number) = false;

for(let i=0;i<numbers.length;i++) {
    if(numbers[i] <= 1) {
        value = numbers[i];
    }
}