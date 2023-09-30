const profile = {
    name: 'gokul',
    age: 23,
    place: 'yehe',
    just: {
        x1: 20,
        y1: 20
    },
    changeAge(age: number): void {
        this.age = age;
    }
}


//destructuring 
const { age }: { age: number } = profile;

const { just: {x1, y1} }: { just: { x1: number; y1: number } } = profile;