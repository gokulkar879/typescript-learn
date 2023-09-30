//Type annotations for function is basically 
//telling ts what type of arguments the function take
//and what type of value will it return

//Type inference on the other hand is ts basically trying to figure  out 
//the type of value that the function will return

const add: (x: number, y: number) => number = (x, y) => {
    return x + y;
}

// in the above example we are actually modifying the variable and not the function

const add2 = (x: number, y: number): number => {
    return x + y;
}

// in the above example we are modifying the function


function divide(a: number, b: number): number {
    return a/b;
}

const multiply = function(a: number, b: number): (number) {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message)

}

const throwError = (message: string): never => {
    throw new Error(message);
}

//destructuring along with annotations
const imaginary = {
    x: 3,
    y: 4
}

const helper = ({ x, y }: {x: number, y: number}): void => {
    
}