class Vehicle {
    drive() : void {
        console.log('chugga chugga')
    }

    protected honk(): void {
        console.log('beep')
    }

    // color: string 

    // constructor(color: string) {
    //     this.color = color
    // }

    constructor(public color: string){

    }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)
// vehicle.drive()
// vehicle.honk()

class Car2 extends Vehicle {

    constructor (public wheels: number, color: string) {
        super(color)
    }

    drive(): void {
        console.log('vroom')
    }

    private transform(): void {
        this.honk()
        console.log('yes it is a transformer!')
    }
}

const car2 = new Car2(4, 'red')
car2.drive()
// car2.honk()
//the above can't be called cos it's protected, it can be accessed only by its child class such as Car2

//Typescript classes modifiers
// public: this method can be called anywhere, any time 
//private: this method can only be called by other methods in THIS class
//protected: this method can be called by other methods in THIS class, or by other methods in child classes. 

